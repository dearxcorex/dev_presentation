<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { ref, onMounted } from 'vue'
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

// OCR Data from Picture1.png - งบประมาณ ปี 2568 ส.ทภ.กสทช. เขต 23
// ข้อมูล ณ วันที่ 30 พฤศจิกายน 2568

const chartRef = ref<any>(null)

// Quarterly budget execution data (in thousands)
const data = ref({
  labels: ['ไตรมาส 1', 'ไตรมาส 2', 'ไตรมาส 3', 'ไตรมาส 4'],
  datasets: [
    {
      label: 'แผนเบิกจ่าย',
      data: [731050, 1328625, 1147280, 1391945],
      backgroundColor: 'rgba(147, 197, 253, 0.7)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 2,
      borderRadius: 6,
    },
    {
      label: 'เบิกจ่ายจริง',
      data: [681073.64, 945912.70, 982790.91, 958707.12],
      backgroundColor: 'rgba(134, 239, 172, 0.7)',
      borderColor: 'rgba(34, 197, 94, 1)',
      borderWidth: 2,
      borderRadius: 6,
    }
  ]
})

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      align: 'end' as const,
      labels: {
        color: '#64748b',
        font: { family: "'Noto Sans Thai', sans-serif", size: 11, weight: '500' as const },
        padding: 12,
        usePointStyle: true,
        pointStyle: 'rect',
        boxWidth: 12,
        boxHeight: 12,
      }
    },
    title: {
      display: false,
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
          const value = context.parsed.y
          return ` ${context.dataset.label}: ${value.toLocaleString('th-TH')} บาท`
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: '#64748b',
        font: { family: "'Noto Sans Thai', sans-serif", size: 11, weight: '500' as const },
      },
      grid: {
        display: false,
      },
      border: {
        display: false,
      }
    },
    y: {
      ticks: {
        color: '#94a3b8',
        font: { family: "'Noto Sans Thai', sans-serif", size: 10, weight: '500' as const },
        callback: function(value: any) {
          return value.toLocaleString('th-TH')
        }
      },
      grid: {
        color: 'rgba(148, 163, 184, 0.15)',
      },
      border: {
        display: false,
      },
      beginAtZero: true
    }
  }
}
</script>

<template>
  <div class="w-full h-56">
    <Bar ref="chartRef" :data="data" :options="options" />
  </div>
</template>
