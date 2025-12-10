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

// Cable complaint resolution data
const data = {
  labels: ['ดำเนินการแล้วเสร็จ (93.67%)', 'อยู่ระหว่างดำเนินการ (6.33%)'],
  datasets: [
    {
      data: [148, 10],
      backgroundColor: [
        'rgba(34, 197, 94, 0.85)',
        'rgba(251, 191, 36, 0.85)',
      ],
      borderColor: [
        'rgba(34, 197, 94, 1)',
        'rgba(251, 191, 36, 1)',
      ],
      borderWidth: 2,
      hoverOffset: 6
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '60%',
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        color: '#475569',
        font: { family: "'Noto Sans Thai', sans-serif", size: 10, weight: '500' as const },
        padding: 12,
        usePointStyle: true,
        pointStyle: 'circle',
        boxWidth: 8,
      }
    },
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      titleColor: '#1e293b',
      bodyColor: '#475569',
      borderColor: 'rgba(0, 0, 0, 0.1)',
      borderWidth: 1,
      padding: 10,
      cornerRadius: 8,
      titleFont: { family: "'Noto Sans Thai', sans-serif", size: 11, weight: '600' as const },
      bodyFont: { family: "'Noto Sans Thai', sans-serif", size: 10, weight: '500' as const },
      callbacks: {
        label: function(context: any) {
          return ` ${context.parsed.toLocaleString('th-TH')} เรื่อง`
        }
      }
    }
  }
}
</script>

<template>
  <div class="w-full h-44">
    <Doughnut :data="data" :options="options" />
  </div>
</template>
