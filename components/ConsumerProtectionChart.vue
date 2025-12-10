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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// Set global font family
ChartJS.defaults.font.family = "'Noto Sans Thai', sans-serif"

// Data from ผลการปฏิบัติงานงาน ผภ. ปี 2568.docx
const data = {
  labels: ['สายสื่อสาร', 'สถานีฐาน', 'คุณภาพบริการ', 'อื่นๆ'],
  datasets: [
    {
      label: 'จำนวนเรื่องร้องเรียน',
      data: [158, 5, 6, 1],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(249, 115, 22, 0.8)',
        'rgba(168, 85, 247, 0.8)',
        'rgba(34, 197, 94, 0.8)',
      ],
      borderColor: [
        'rgba(59, 130, 246, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(168, 85, 247, 1)',
        'rgba(34, 197, 94, 1)',
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
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      titleColor: '#1e293b',
      bodyColor: '#475569',
      borderColor: 'rgba(0, 0, 0, 0.1)',
      borderWidth: 1,
      padding: 12,
      cornerRadius: 8,
      titleFont: { family: "'Noto Sans Thai', sans-serif", size: 12, weight: '600' as const },
      bodyFont: { family: "'Noto Sans Thai', sans-serif", size: 11, weight: '500' as const },
      callbacks: {
        label: function(context: any) {
          return ` ${context.parsed.x.toLocaleString('th-TH')} เรื่อง`
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: '#94a3b8',
        font: { family: "'Noto Sans Thai', sans-serif", size: 10, weight: '500' as const },
      },
      grid: {
        color: 'rgba(148, 163, 184, 0.15)',
      },
      border: {
        display: false,
      }
    },
    y: {
      ticks: {
        color: '#475569',
        font: { family: "'Noto Sans Thai', sans-serif", size: 11, weight: '500' as const },
      },
      grid: {
        display: false,
      },
      border: {
        display: false,
      }
    }
  }
}
</script>

<template>
  <div class="w-full h-40">
    <Bar :data="data" :options="options" />
  </div>
</template>
