<script setup lang="ts">
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { THAI_FONT, setupChartDefaults } from '../setup/chartSetup'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)
setupChartDefaults()

// Real data from: รายงานประจำเดือน มค- พย 68.xlsx
const data = {
  labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.'],
  datasets: [
    {
      label: 'โดรน',
      data: [108, 116, 107, 93, 113, 104, 109, 110, 100, 76, 91],
      borderColor: 'rgba(16, 185, 129, 1)',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: 'rgba(16, 185, 129, 1)',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 8
    },
    {
      label: 'วิทยุสมัครเล่น/ประชาชน',
      data: [80, 115, 46, 44, 87, 78, 51, 134, 134, 66, 54],
      borderColor: 'rgba(59, 130, 246, 1)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: 'rgba(59, 130, 246, 1)',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 8
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#1d1d1f',
        font: { family: THAI_FONT, size: 13, weight: '500' as const },
        padding: 20,
        usePointStyle: true
      }
    },
    title: {
      display: true,
      text: 'แนวโน้มการออกใบอนุญาตรายเดือน (ม.ค. - พ.ย. 2568)',
      color: '#1d1d1f',
      font: { family: THAI_FONT, size: 16, weight: 'bold' as const },
      padding: { bottom: 20 }
    }
  },
  scales: {
    x: {
      ticks: { color: '#86868b', font: { family: THAI_FONT, size: 11 } },
      grid: { color: 'rgba(0, 0, 0, 0.05)' }
    },
    y: {
      ticks: { color: '#86868b', font: { family: THAI_FONT, size: 12 } },
      grid: { color: 'rgba(0, 0, 0, 0.08)' },
      beginAtZero: true
    }
  },
  interaction: {
    intersect: false,
    mode: 'index' as const
  }
}
</script>

<template>
  <div class="w-full h-72">
    <Line :data="data" :options="options" />
  </div>
</template>
