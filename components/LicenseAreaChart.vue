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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

// Set global font family
ChartJS.defaults.font.family = "'Noto Sans Thai', sans-serif"

// Create gradient fills (shadcn-style)
const createGradient = (ctx: CanvasRenderingContext2D, color: string, opacity1: number, opacity2: number) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 300)
  gradient.addColorStop(0, color.replace('1)', `${opacity1})`))
  gradient.addColorStop(1, color.replace('1)', `${opacity2})`))
  return gradient
}

// Chart colors (shadcn-inspired)
const colors = {
  drone: 'rgba(34, 197, 94, 1)',      // green-500
  radio: 'rgba(59, 130, 246, 1)',      // blue-500
}

const chartRef = ref<any>(null)

// Real data from: รายงานประจำเดือน มค- พย 68.xlsx
const labels = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.']
const droneData = [108, 116, 107, 93, 113, 104, 109, 110, 100, 76, 91]
const radioData = [80, 115, 46, 44, 87, 78, 51, 134, 134, 66, 54]

const data = ref({
  labels,
  datasets: [
    {
      label: 'โดรน',
      data: droneData,
      borderColor: colors.drone,
      backgroundColor: 'rgba(34, 197, 94, 0.15)',
      borderWidth: 2.5,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: colors.drone,
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: colors.drone,
      pointHoverBorderColor: '#fff',
      pointHoverBorderWidth: 2,
    },
    {
      label: 'วิทยุสมัครเล่น/ประชาชน',
      data: radioData,
      borderColor: colors.radio,
      backgroundColor: 'rgba(59, 130, 246, 0.15)',
      borderWidth: 2.5,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: colors.radio,
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: colors.radio,
      pointHoverBorderColor: '#fff',
      pointHoverBorderWidth: 2,
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
        font: { family: "'Noto Sans Thai', sans-serif", size: 12, weight: '500' as const },
        padding: 16,
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
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      titleColor: '#1e293b',
      bodyColor: '#475569',
      borderColor: 'rgba(0, 0, 0, 0.1)',
      borderWidth: 1,
      padding: 12,
      cornerRadius: 8,
      boxPadding: 6,
      usePointStyle: true,
      titleFont: { family: "'Noto Sans Thai', sans-serif", size: 13, weight: '600' as const },
      bodyFont: { family: "'Noto Sans Thai', sans-serif", size: 12, weight: '500' as const },
      callbacks: {
        label: function(context: any) {
          return ` ${context.dataset.label}: ${context.parsed.y} ฉบับ`
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: '#94a3b8',
        font: { family: "'Noto Sans Thai', sans-serif", size: 11, weight: '500' as const },
        padding: 8,
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
        font: { family: "'Noto Sans Thai', sans-serif", size: 11, weight: '500' as const },
        padding: 12,
        stepSize: 40,
      },
      grid: {
        color: 'rgba(148, 163, 184, 0.1)',
        lineWidth: 1,
      },
      border: {
        display: false,
        dash: [4, 4],
      },
      beginAtZero: true
    }
  },
  interaction: {
    intersect: false,
    mode: 'index' as const
  },
  elements: {
    line: {
      capBezierPoints: true
    }
  }
}

// Apply gradients after chart is mounted
onMounted(() => {
  if (chartRef.value?.chart) {
    const chart = chartRef.value.chart
    const ctx = chart.ctx

    // Create gradients
    const droneGradient = createGradient(ctx, colors.drone, 0.4, 0.02)
    const radioGradient = createGradient(ctx, colors.radio, 0.3, 0.02)

    // Apply gradients to datasets
    chart.data.datasets[0].backgroundColor = droneGradient
    chart.data.datasets[1].backgroundColor = radioGradient

    chart.update()
  }
})
</script>

<template>
  <div class="w-full rounded-xl bg-white/50 p-4">
    <div class="mb-4">
      <h3 class="text-lg font-semibold text-slate-800">แนวโน้มการออกใบอนุญาตรายเดือน</h3>
      <p class="text-sm text-slate-500">ม.ค. - พ.ย. 2568</p>
    </div>
    <div class="h-64">
      <Line ref="chartRef" :data="data" :options="options" />
    </div>
    <div class="mt-4 flex items-center gap-2 text-sm text-slate-600">
      <span class="inline-flex items-center gap-1">
        <svg class="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        โดรนเฉลี่ย 102 ใบ/เดือน
      </span>
    </div>
  </div>
</template>
