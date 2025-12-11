<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { THAI_FONT, setupChartDefaults } from '../setup/chartSetup'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
setupChartDefaults()

// Real data from: รายงานประจำเดือน มค- พย 68.xlsx
const data = {
  labels: ['โดรน', 'วิทยุสมัครเล่น/ประชาชน', 'มูลนิธิ/สมาคม', 'อปท.'],
  datasets: [
    {
      label: 'จำนวนใบอนุญาต (ฉบับ)',
      data: [1127, 889, 55, 41],
      backgroundColor: [
        'rgba(16, 185, 129, 0.85)',  // green - drone
        'rgba(59, 130, 246, 0.85)',  // blue - radio
        'rgba(139, 92, 246, 0.85)',  // purple - foundation
        'rgba(245, 158, 11, 0.85)',  // orange - local gov
      ],
      borderColor: [
        'rgba(16, 185, 129, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(139, 92, 246, 1)',
        'rgba(245, 158, 11, 1)',
      ],
      borderWidth: 2,
      borderRadius: 8,
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y' as const,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'จำนวนใบอนุญาตแยกตามประเภท (ม.ค. - พ.ย. 2568)',
      color: '#1d1d1f',
      font: { family: THAI_FONT, size: 16, weight: 'bold' as const },
      padding: { bottom: 20 }
    }
  },
  scales: {
    x: {
      ticks: { color: '#86868b', font: { family: THAI_FONT, size: 12 } },
      grid: { color: 'rgba(0, 0, 0, 0.05)' }
    },
    y: {
      ticks: { color: '#1d1d1f', font: { family: THAI_FONT, size: 13, weight: '500' as const } },
      grid: { display: false }
    }
  }
}
</script>

<template>
  <div class="w-full h-72">
    <Bar :data="data" :options="options" />
  </div>
</template>
