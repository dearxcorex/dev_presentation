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

// Data: รบกวนการบิน 29 ครั้ง, แก้ไขแล้ว 9 ครั้ง
const data = {
  labels: ['รบกวนการบิน'],
  datasets: [
    {
      label: 'แก้ไขแล้ว',
      data: [9],
      backgroundColor: 'rgba(34, 197, 94, 0.85)',
      borderColor: 'rgba(34, 197, 94, 1)',
      borderWidth: 2,
      borderRadius: 6,
      barThickness: 40
    },
    {
      label: 'รอดำเนินการ',
      data: [20],
      backgroundColor: 'rgba(251, 146, 60, 0.85)',
      borderColor: 'rgba(251, 146, 60, 1)',
      borderWidth: 2,
      borderRadius: 6,
      barThickness: 40
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y' as const,
  scales: {
    x: {
      stacked: true,
      max: 29,
      ticks: {
        color: '#64748b',
        font: { family: THAI_FONT, size: 10 },
        stepSize: 5
      },
      grid: {
        color: 'rgba(148, 163, 184, 0.2)',
      },
      border: { display: false }
    },
    y: {
      stacked: true,
      ticks: {
        color: '#334155',
        font: { family: THAI_FONT, size: 12, weight: '600' as const }
      },
      grid: { display: false },
      border: { display: false }
    }
  },
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        color: '#475569',
        font: { family: THAI_FONT, size: 11, weight: '500' as const },
        padding: 15,
        usePointStyle: true,
        pointStyle: 'circle',
        boxWidth: 8
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
      titleFont: { family: THAI_FONT, size: 12, weight: '600' as const },
      bodyFont: { family: THAI_FONT, size: 11, weight: '500' as const },
      callbacks: {
        label: function(context: any) {
          return ` ${context.dataset.label}: ${context.parsed.x} ครั้ง`
        }
      }
    }
  }
}
</script>

<template>
  <div class="w-full h-24">
    <Bar :data="data" :options="options" />
  </div>
</template>
