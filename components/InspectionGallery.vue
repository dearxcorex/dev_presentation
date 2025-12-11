<script setup lang="ts">
import { ref, computed } from 'vue'

const activeCard = ref<string | null>(null)
const rippleStyle = ref<Record<string, string>>({})
const rippleId = ref<string | null>(null)

const activities = [
  {
    id: 'station',
    icon: '📡',
    name: 'สถานีตรวจสอบคลื่น',
    location: 'จ.บุรีรัมย์',
    date: '8 ธ.ค. 2568',
    color: 'blue',
    images: [
      '/sectione/งานตรวจสอบ/2568-12-11 23.24.02.jpeg',
      '/sectione/งานตรวจสอบ/photo_2568-12-11 23.25.08.jpeg'
    ],
    description: 'ตรวจรับสถานีตรวจสอบคลื่นความถี่ระยะไกล (Remote Control Radio Monitoring Station)',
    details: 'ตรวจรับงานสถานีตรวจสอบการใช้ความถี่วิทยุระบบควบคุมระยะไกล สำนักงาน กสทช. เขต 23'
  },
  {
    id: 'seizure',
    icon: '🔍',
    name: 'ตรวจค้นจับกุม',
    location: 'วิทยุสื่อสาร',
    date: '2568',
    color: 'red',
    images: [
      '/sectione/งานตรวจสอบ/photo_2568-12-11 23.25.41.jpeg'
    ],
    description: 'ตรวจค้นจับกุมวิทยุสื่อสาร',
    details: 'ปฏิบัติการตรวจค้นและจับกุมอุปกรณ์วิทยุสื่อสารที่ผิดกฎหมาย'
  },
  {
    id: 'border',
    icon: '📶',
    name: 'ติดตั้งทวนสัญญาณ',
    location: 'ชายแดน จ.บุรีรัมย์',
    date: '2568',
    color: 'green',
    images: [
      '/sectione/งานตรวจสอบ/photo_2568-12-11 23.25.56.jpeg'
    ],
    description: 'ติดตั้งอุปกรณ์ทวนสัญญาณบริเวณชายแดน',
    details: 'ติดตั้งอุปกรณ์ทวนสัญญาณเพื่อขยายพื้นที่ครอบคลุมสัญญาณบริเวณชายแดน จังหวัดบุรีรัมย์'
  },
  {
    id: 'uav',
    icon: '🚁',
    name: 'บูรณาการ บน.1',
    location: 'ตรวจ UAV',
    date: '7 ส.ค. 2568',
    color: 'purple',
    images: [
      '/sectione/งานตรวจสอบ/photo_2568-12-11 23.26.27.jpeg'
    ],
    description: 'บูรณาการร่วมกับ บน.1 ตรวจ UAV',
    details: 'ปฏิบัติการร่วมกับกองบิน 1 ในการตรวจสอบอากาศยานไร้คนขับ (UAV) ณ ต.ปรุใหญ่ อ.เมือง จ.นครราชสีมา'
  }
]

const toggleCard = (id: string, event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  rippleStyle.value = { left: `${x}px`, top: `${y}px` }
  rippleId.value = id
  setTimeout(() => rippleId.value = null, 600)

  activeCard.value = activeCard.value === id ? null : id
}

const isActive = (id: string) => activeCard.value === id
const hasSelection = computed(() => activeCard.value !== null)
const selectedActivity = computed(() => activities.find(a => a.id === activeCard.value))
const currentImageIndex = ref(0)

const nextImage = () => {
  if (selectedActivity.value && currentImageIndex.value < selectedActivity.value.images.length - 1) {
    currentImageIndex.value++
  }
}

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}

// Reset image index when changing activity
const selectActivity = (id: string, event: MouseEvent) => {
  if (activeCard.value !== id) {
    currentImageIndex.value = 0
  }
  toggleCard(id, event)
}
</script>

<template>
  <div class="w-full">
    <!-- Activity Cards -->
    <div class="grid grid-cols-4 gap-3 mb-4">
      <div
        v-for="(activity, index) in activities"
        :key="activity.id"
        @click="selectActivity(activity.id, $event)"
        :class="[
          'card-item relative overflow-hidden p-3 rounded-xl border-2 cursor-pointer transition-all duration-300',
          isActive(activity.id)
            ? `card-active card-${activity.color}-active`
            : `card-${activity.color}`,
          hasSelection && !isActive(activity.id) ? 'opacity-40 scale-95' : '',
        ]"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <!-- Ripple Effect -->
        <span v-if="rippleId === activity.id" class="ripple" :style="rippleStyle"></span>

        <div class="text-center relative z-10">
          <span class="icon-bounce text-2xl inline-block">{{ activity.icon }}</span>
          <div class="text-xs text-gray-700 mt-1 font-semibold">{{ activity.name }}</div>
          <div class="text-[10px] text-gray-500">{{ activity.location }}</div>
        </div>

        <!-- Glow effect layer -->
        <div :class="`glow-layer glow-${activity.color}`"></div>
      </div>
    </div>

    <!-- Content Area -->
    <div class="min-h-[320px] relative">
      <!-- Default: CTA Prompt -->
      <div v-if="!activeCard" class="default-view">
        <div class="flex flex-col items-center justify-center h-[320px]">
          <div class="cta-prompt">
            <span class="cta-hand">👆</span>
            <span class="text-gray-500">คลิกเพื่อดูภาพกิจกรรม</span>
          </div>
        </div>
      </div>

      <!-- Activity Detail with Image -->
      <div v-else-if="selectedActivity" class="content-panel">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-2xl">{{ selectedActivity.icon }}</span>
          <span :class="`text-lg font-bold text-${selectedActivity.color}-700`">{{ selectedActivity.description }}</span>
          <button @click="activeCard = null" class="ml-auto w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center text-sm">✕</button>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <!-- Image Gallery -->
          <div class="relative">
            <div class="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100">
              <img
                :src="selectedActivity.images[currentImageIndex]"
                :alt="selectedActivity.description"
                class="w-full h-56 object-cover"
                @error="(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Image'"
              />
            </div>

            <!-- Image Navigation -->
            <div v-if="selectedActivity.images.length > 1" class="flex justify-center gap-2 mt-2">
              <button
                @click="prevImage"
                :disabled="currentImageIndex === 0"
                class="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 transition-all text-sm"
              >
                ←
              </button>
              <span class="px-3 py-1 text-sm text-gray-500">
                {{ currentImageIndex + 1 }} / {{ selectedActivity.images.length }}
              </span>
              <button
                @click="nextImage"
                :disabled="currentImageIndex === selectedActivity.images.length - 1"
                class="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 transition-all text-sm"
              >
                →
              </button>
            </div>
          </div>

          <!-- Details -->
          <div class="space-y-3">
            <div :class="`p-3 rounded-lg bg-${selectedActivity.color}-50 border-l-4 border-${selectedActivity.color}-500`">
              <div :class="`font-medium text-${selectedActivity.color}-800`">{{ selectedActivity.description }}</div>
              <div class="text-xs text-gray-600 mt-1">{{ selectedActivity.details }}</div>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <div class="p-2 rounded-lg bg-gray-50 border border-gray-200">
                <div class="text-[10px] text-gray-500">สถานที่</div>
                <div class="text-sm font-medium text-gray-700">{{ selectedActivity.location }}</div>
              </div>
              <div class="p-2 rounded-lg bg-gray-50 border border-gray-200">
                <div class="text-[10px] text-gray-500">วันที่</div>
                <div class="text-sm font-medium text-gray-700">{{ selectedActivity.date }}</div>
              </div>
            </div>

            <div class="p-2 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-700">
              <strong>หน่วยงาน:</strong> สำนักงาน กสทช. เขต 23
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Card base styles with entrance animation */
.card-item {
  animation: cardEntrance 0.5s ease-out both;
  transform-origin: center;
}

@keyframes cardEntrance {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Card color variants */
.card-blue {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-color: #93c5fd;
}
.card-green {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border-color: #86efac;
}
.card-red {
  background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%);
  border-color: #fca5a5;
}
.card-purple {
  background: linear-gradient(135deg, #faf5ff 0%, #e9d5ff 100%);
  border-color: #c4b5fd;
}

/* Active card states with glow */
.card-active {
  transform: translateY(-4px) scale(1.02);
  z-index: 10;
}

.card-blue-active {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  border-color: #3b82f6;
  box-shadow: 0 0 25px rgba(59, 130, 246, 0.5), 0 12px 24px -8px rgba(0, 0, 0, 0.15);
}
.card-green-active {
  background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
  border-color: #22c55e;
  box-shadow: 0 0 25px rgba(34, 197, 94, 0.5), 0 12px 24px -8px rgba(0, 0, 0, 0.15);
}
.card-red-active {
  background: linear-gradient(135deg, #fecaca 0%, #fca5a5 100%);
  border-color: #ef4444;
  box-shadow: 0 0 25px rgba(239, 68, 68, 0.5), 0 12px 24px -8px rgba(0, 0, 0, 0.15);
}
.card-purple-active {
  background: linear-gradient(135deg, #e9d5ff 0%, #d8b4fe 100%);
  border-color: #a855f7;
  box-shadow: 0 0 25px rgba(168, 85, 247, 0.5), 0 12px 24px -8px rgba(0, 0, 0, 0.15);
}

/* Hover effects */
.card-item:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.25);
}

.card-item:hover .icon-bounce {
  animation: iconBounce 0.6s ease infinite;
}

@keyframes iconBounce {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-8px) rotate(-5deg); }
  75% { transform: translateY(-8px) rotate(5deg); }
}

/* Glow layer */
.glow-layer {
  position: absolute;
  inset: -2px;
  border-radius: 14px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.card-item:hover .glow-layer {
  opacity: 1;
}

.glow-blue { box-shadow: inset 0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.4); }
.glow-green { box-shadow: inset 0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.4); }
.glow-red { box-shadow: inset 0 0 20px rgba(239, 68, 68, 0.3), 0 0 40px rgba(239, 68, 68, 0.4); }
.glow-purple { box-shadow: inset 0 0 20px rgba(168, 85, 247, 0.3), 0 0 40px rgba(168, 85, 247, 0.4); }

/* Ripple effect */
.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  transform: scale(0);
  animation: rippleEffect 0.6s ease-out;
  pointer-events: none;
  width: 200px;
  height: 200px;
  margin-left: -100px;
  margin-top: -100px;
}

@keyframes rippleEffect {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* Default view */
.default-view {
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* CTA prompt */
.cta-prompt {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  animation: ctaPulse 2s ease-in-out infinite;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

@keyframes ctaPulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4), 0 4px 15px rgba(0, 0, 0, 0.05);
  }
  50% {
    box-shadow: 0 0 0 15px rgba(59, 130, 246, 0), 0 4px 15px rgba(0, 0, 0, 0.05);
  }
}

.cta-hand {
  animation: handPoint 1.2s ease-in-out infinite;
  display: inline-block;
  font-size: 1.5rem;
}

@keyframes handPoint {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Content panel */
.content-panel {
  animation: slideIn 0.4s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
