<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { THAI_FONT, setupChartDefaults } from '../setup/chartSetup'

ChartJS.register(ArcElement, Tooltip, Legend)
setupChartDefaults()

// Data from: สรุปผลการทำงาน2568_ฉบับปรับปรุง.md - งานนอกแผน
const data = {
  labels: [
    'โทรคมนาคม (10)',
    'ภารกิจพิเศษ (8)',
    'AM/FM (7)',
    'ตามร้องขอ (6)',
    'คลื่นรบกวน (3)'
  ],
  datasets: [
    {
      data: [10, 8, 7, 6, 3],
      backgroundColor: [
        'rgba(16, 185, 129, 0.85)',   // green - telecom
        'rgba(245, 158, 11, 0.85)',   // orange - special mission
        'rgba(59, 130, 246, 0.85)',   // blue - AM/FM
        'rgba(139, 92, 246, 0.85)',   // purple - request
        'rgba(239, 68, 68, 0.85)',    // red - interference
      ],
      borderColor: [
        'rgba(16, 185, 129, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(139, 92, 246, 1)',
        'rgba(239, 68, 68, 1)',
      ],
      borderWidth: 2,
      hoverOffset: 8
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '50%',
  plugins: {
    legend: {
      position: 'right' as const,
      labels: {
        color: '#475569',
        font: { family: THAI_FONT, size: 11, weight: '500' as const },
        padding: 10,
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
          return ` ${context.parsed} รายการ`
        }
      }
    }
  }
}
</script>

<template>
  <div class="w-full h-52">
    <Doughnut :data="data" :options="options" />
  </div>
</template>
