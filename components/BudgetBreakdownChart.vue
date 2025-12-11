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

// OCR Data from Picture1.png - Budget breakdown by category
// งบประมาณ ปี 2568 ส.ทภ.กสทช. เขต 23

const data = {
  labels: [
    'ค่าใช้สอย (60.3%)',
    'ค่าสาธารณูปโภค (14.4%)',
    'ค่าลิขสิทธิ์ซอฟต์แวร์ (13.6%)',
    'ค่าวัสดุ (7.6%)',
    'ค่าครุภัณฑ์ (3.2%)',
    'ค่าตอบแทน (1.0%)'
  ],
  datasets: [
    {
      data: [2773000, 660000, 625000, 349000, 148100, 43800],
      backgroundColor: [
        'rgba(59, 130, 246, 0.85)',   // blue
        'rgba(249, 115, 22, 0.85)',   // orange
        'rgba(168, 85, 247, 0.85)',   // purple
        'rgba(34, 197, 94, 0.85)',    // green
        'rgba(236, 72, 153, 0.85)',   // pink
        'rgba(234, 179, 8, 0.85)',    // yellow
      ],
      borderColor: [
        'rgba(59, 130, 246, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(168, 85, 247, 1)',
        'rgba(34, 197, 94, 1)',
        'rgba(236, 72, 153, 1)',
        'rgba(234, 179, 8, 1)',
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
        font: { family: THAI_FONT, size: 10, weight: '500' as const },
        padding: 8,
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
      titleFont: { family: THAI_FONT, size: 11, weight: '600' as const },
      bodyFont: { family: THAI_FONT, size: 10, weight: '500' as const },
      callbacks: {
        label: function(context: any) {
          const value = context.parsed
          return ` ${value.toLocaleString('th-TH')} บาท`
        }
      }
    }
  }
}
</script>

<template>
  <div class="w-full h-48">
    <Doughnut :data="data" :options="options" />
  </div>
</template>
