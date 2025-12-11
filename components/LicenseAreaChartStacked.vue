<script setup lang="ts">
import { Line } from 'vue-chartjs'
import { ref, onMounted } from 'vue'
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

// Create gradient fills (shadcn-style)
const createGradient = (ctx: CanvasRenderingContext2D, color: string, opacity1: number, opacity2: number) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 280)
  gradient.addColorStop(0, color.replace('1)', `${opacity1})`))
  gradient.addColorStop(1, color.replace('1)', `${opacity2})`))
  return gradient
}

// Chart colors (shadcn-inspired)
const colors = {
  drone: 'rgba(34, 197, 94, 1)',        // green-500
  radio: 'rgba(59, 130, 246, 1)',        // blue-500
  foundation: 'rgba(168, 85, 247, 1)',   // purple-500
  local: 'rgba(249, 115, 22, 1)',        // orange-500
}

const chartRef = ref<any>(null)

// Real data from: รายงานประจำเดือน มค- พย 68.xlsx
const labels = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.']

// Stacked data - showing cumulative totals
const droneData = [108, 116, 107, 93, 113, 104, 109, 110, 100, 76, 91]
const radioData = [80, 115, 46, 44, 87, 78, 51, 134, 134, 66, 54]

const data = ref({
  labels,
  datasets: [
    {
      label: 'วิทยุสมัครเล่น/ประชาชน',
      data: radioData,
      borderColor: colors.radio,
      backgroundColor: 'rgba(59, 130, 246, 0.4)',
      borderWidth: 2,
      fill: true,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: colors.radio,
      pointHoverBorderColor: '#fff',
      pointHoverBorderWidth: 2,
      order: 2,
    },
    {
      label: 'โดรน',
      data: droneData,
      borderColor: colors.drone,
      backgroundColor: 'rgba(34, 197, 94, 0.5)',
      borderWidth: 2,
      fill: true,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: colors.drone,
      pointHoverBorderColor: '#fff',
      pointHoverBorderWidth: 2,
      order: 1,
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
        font: { family: THAI_FONT, size: 11, weight: '500' as const },
        padding: 12,
        usePointStyle: true,
        pointStyle: 'circle',
        boxWidth: 8,
        boxHeight: 8,
      }
    },
    title: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 0.96)',
      titleColor: '#1e293b',
      bodyColor: '#475569',
      borderColor: 'rgba(0, 0, 0, 0.08)',
      borderWidth: 1,
      padding: 12,
      cornerRadius: 10,
      boxPadding: 6,
      usePointStyle: true,
      titleFont: { family: THAI_FONT, size: 12, weight: '600' as const },
      bodyFont: { family: THAI_FONT, size: 11, weight: '500' as const },
      callbacks: {
        label: function(context: any) {
          return ` ${context.dataset.label}: ${context.parsed.y} ฉบับ`
        }
      }
    }
  },
  scales: {
    x: {
      stacked: true,
      ticks: {
        color: '#94a3b8',
        font: { family: THAI_FONT, size: 10, weight: '500' as const },
        padding: 6,
      },
      grid: {
        display: false,
      },
      border: {
        display: false,
      }
    },
    y: {
      stacked: true,
      ticks: {
        color: '#94a3b8',
        font: { family: THAI_FONT, size: 10, weight: '500' as const },
        padding: 8,
        stepSize: 50,
      },
      grid: {
        color: 'rgba(148, 163, 184, 0.12)',
        lineWidth: 1,
      },
      border: {
        display: false,
      },
      beginAtZero: true
    }
  },
  interaction: {
    intersect: false,
    mode: 'index' as const
  }
}

// Apply gradients after chart is mounted
onMounted(() => {
  if (chartRef.value?.chart) {
    const chart = chartRef.value.chart
    const ctx = chart.ctx

    // Create gradients
    const droneGradient = createGradient(ctx, colors.drone, 0.6, 0.1)
    const radioGradient = createGradient(ctx, colors.radio, 0.5, 0.1)

    // Apply gradients to datasets
    chart.data.datasets[0].backgroundColor = radioGradient
    chart.data.datasets[1].backgroundColor = droneGradient

    chart.update()
  }
})
</script>

<template>
  <div class="w-full rounded-xl bg-white/50 p-3">
    <div class="mb-3">
      <h3 class="text-base font-semibold text-slate-800">สัดส่วนใบอนุญาตรายเดือน (Stacked)</h3>
      <p class="text-xs text-slate-500">แสดงการเปรียบเทียบสัดส่วนโดรน vs วิทยุ</p>
    </div>
    <div class="h-52">
      <Line ref="chartRef" :data="data" :options="options" />
    </div>
  </div>
</template>
