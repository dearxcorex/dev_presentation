import { Chart as ChartJS } from 'chart.js'

// Font family constant
export const THAI_FONT = "'Noto Sans Thai', 'Sarabun', sans-serif"

// Configure Chart.js defaults for Thai fonts
export function setupChartDefaults() {
  // Set global defaults
  ChartJS.defaults.font.family = THAI_FONT
  ChartJS.defaults.font.size = 12

  // Ensure plugins use Thai font
  if (ChartJS.defaults.plugins.legend) {
    ChartJS.defaults.plugins.legend.labels = {
      ...ChartJS.defaults.plugins.legend.labels,
      font: {
        family: THAI_FONT,
        size: 11,
        weight: 500
      }
    }
  }

  if (ChartJS.defaults.plugins.tooltip) {
    ChartJS.defaults.plugins.tooltip.titleFont = {
      family: THAI_FONT,
      size: 12,
      weight: 600
    }
    ChartJS.defaults.plugins.tooltip.bodyFont = {
      family: THAI_FONT,
      size: 11,
      weight: 500
    }
  }
}

// Font options helper for consistency
export const fontOptions = {
  title: { family: THAI_FONT, size: 16, weight: 'bold' as const },
  legend: { family: THAI_FONT, size: 11, weight: '500' as const },
  ticks: { family: THAI_FONT, size: 11, weight: '500' as const },
  ticksSmall: { family: THAI_FONT, size: 10, weight: '500' as const },
  tooltip: {
    title: { family: THAI_FONT, size: 12, weight: '600' as const },
    body: { family: THAI_FONT, size: 11, weight: '500' as const }
  }
}
