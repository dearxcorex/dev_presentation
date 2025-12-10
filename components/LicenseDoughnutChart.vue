<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

// Set global font family
ChartJS.defaults.font.family = "'Noto Sans Thai', sans-serif"

// Real data from: รายงานประจำเดือน มค- พย 68.xlsx
const data = {
  labels: ['โดรน (53.3%)', 'วิทยุสมัครเล่น/ประชาชน (42.1%)', 'มูลนิธิ/สมาคม (2.6%)', 'อปท. (1.9%)'],
  datasets: [
    {
      data: [1127, 889, 55, 41],
      backgroundColor: [
        'rgba(16, 185, 129, 0.9)',   // green - drone
        'rgba(59, 130, 246, 0.9)',   // blue - radio
        'rgba(139, 92, 246, 0.9)',   // purple - foundation
        'rgba(245, 158, 11, 0.9)',   // orange - local gov
      ],
      borderColor: [
        'rgba(16, 185, 129, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(139, 92, 246, 1)',
        'rgba(245, 158, 11, 1)',
      ],
      borderWidth: 3,
      hoverOffset: 10
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '55%',
  plugins: {
    legend: {
      position: 'right' as const,
      labels: {
        color: '#1d1d1f',
        font: { family: "'Noto Sans Thai', sans-serif", size: 12, weight: '500' as const },
        padding: 12,
        usePointStyle: true,
        pointStyle: 'circle'
      }
    },
    title: {
      display: false
    }
  }
}
</script>

<template>
  <div class="w-full h-64">
    <Doughnut :data="data" :options="options" />
  </div>
</template>
