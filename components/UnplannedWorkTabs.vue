<script setup lang="ts">
import { ref, computed } from 'vue'

const activeTab = ref<string | null>(null)
const rippleStyle = ref<Record<string, string>>({})
const rippleId = ref<string | null>(null)

const categories = [
  { id: 'amfm', icon: '🔊', name: 'AM/FM', count: 7, highlight: 'รายการ', color: 'blue' },
  { id: 'telecom', icon: '📡', name: 'โทรคมนาคม', count: 10, highlight: 'รายการ', color: 'green' },
  { id: 'interference', icon: '⚠️', name: 'คลื่นรบกวน', count: 3, highlight: 'รายการ', color: 'red', urgent: true },
  { id: 'request', icon: '📞', name: 'ตามร้องขอ', count: 6, highlight: 'รายการ', color: 'purple' },
  { id: 'special', icon: '🎖️', name: 'ภารกิจพิเศษ', count: 8, highlight: 'รายการ', color: 'orange' },
]

const toggleTab = (id: string, event: MouseEvent) => {
  // Ripple effect
  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  rippleStyle.value = {
    left: `${x}px`,
    top: `${y}px`,
  }
  rippleId.value = id
  setTimeout(() => rippleId.value = null, 600)

  activeTab.value = activeTab.value === id ? null : id
}

const isActive = (id: string) => activeTab.value === id
const hasSelection = computed(() => activeTab.value !== null)
</script>

<template>
  <div class="w-full">
    <!-- Category Tabs -->
    <div class="grid grid-cols-5 gap-3 mb-4">
      <div
        v-for="(cat, index) in categories"
        :key="cat.id"
        @click="toggleTab(cat.id, $event)"
        :class="[
          'card-item relative overflow-hidden p-3 rounded-xl border-2 cursor-pointer transition-all duration-300',
          isActive(cat.id)
            ? `card-active card-${cat.color}-active`
            : `card-${cat.color}`,
          hasSelection && !isActive(cat.id) ? 'opacity-40 scale-95' : '',
        ]"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <!-- Ripple Effect -->
        <span
          v-if="rippleId === cat.id"
          class="ripple"
          :style="rippleStyle"
        ></span>

        <div class="text-center relative z-10">
          <span class="icon-bounce text-2xl inline-block">{{ cat.icon }}</span>
          <div class="text-xs text-gray-600 mt-1 font-medium">{{ cat.name }}</div>
          <div :class="`text-xl font-bold text-${cat.color}-700`">{{ cat.count }}</div>
          <div :class="[
            'text-[10px] px-2 py-0.5 rounded-full mt-1 inline-block',
            `bg-${cat.color}-200 text-${cat.color}-700`,
            cat.urgent ? 'font-bold animate-pulse' : ''
          ]">{{ cat.highlight }}</div>
        </div>

        <!-- Glow effect layer -->
        <div :class="`glow-layer glow-${cat.color}`"></div>
      </div>
    </div>

    <!-- Content Area -->
    <div class="min-h-[300px] relative">
      <!-- Default: CTA Prompt -->
      <div v-if="!activeTab" class="default-view">
        <div class="flex flex-col items-center justify-center h-[300px]">
          <div class="cta-prompt">
            <span class="cta-hand">👆</span>
            <span class="text-gray-500">คลิกหมวดด้านบนเพื่อดูรายละเอียด</span>
          </div>
        </div>
      </div>

      <!-- AM/FM Details -->
      <div v-else-if="activeTab === 'amfm'" class="content-panel">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-2xl">🔊</span>
          <span class="text-lg font-bold text-blue-700">AM/FM วิทยุกระจายเสียง</span>
          <span class="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">7 รายการ</span>
          <button @click="activeTab = null" class="ml-auto w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center text-sm">✕</button>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="space-y-1.5">
            <div class="p-2 rounded-lg bg-blue-50 border-l-4 border-blue-500">
              <div class="font-medium text-blue-800 text-sm">สถานีสิ้นสิทธิ์ 2568</div>
              <div class="text-xs text-gray-600">ใบอนุญาตหมดอายุ/สิ้นสิทธิ์</div>
              <div class="text-base font-bold text-blue-600">45 สถานี</div>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">AM_FM_ปส ตรวจพิกัด</span>
              <div class="text-gray-500">ตรวจสอบพิกัดที่ตั้งสถานีวิทยุ</div>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">AM_ปส</span>
              <div class="text-gray-500">งานตรวจสอบสถานีวิทยุ AM</div>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">ตรวจสถานี FM กำลังส่งต่ำ</span>
            </div>
          </div>
          <div class="space-y-1.5">
            <div class="detail-item">
              <span class="font-medium text-gray-700">มะเริง 104.75 MHz</span>
              <div class="text-gray-500">ตรวจสอบสถานีวิทยุความถี่ 104.75 MHz</div>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">สอบถามข้อมูล 93.50 MHz</span>
            </div>
            <div class="p-2 rounded-lg bg-red-50 border-l-4 border-red-500 text-xs">
              <span class="font-medium text-red-700">ทำลายเครื่องส่งวิทยุเถื่อน 2568</span>
              <div class="text-gray-600">ทำลายเครื่องส่งที่ยึดจากสถานีเถื่อน</div>
            </div>
          </div>
        </div>
      </div>

      <!-- โทรคมนาคม Details -->
      <div v-else-if="activeTab === 'telecom'" class="content-panel">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-2xl">📡</span>
          <span class="text-lg font-bold text-green-700">โทรคมนาคม</span>
          <span class="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-sm font-bold">10 รายการ</span>
          <button @click="activeTab = null" class="ml-auto w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center text-sm">✕</button>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="space-y-1.5">
            <div class="p-2 rounded-lg bg-green-50 border-l-4 border-green-500 text-xs">
              <span class="font-medium text-green-800">SpaceX/Starlink</span>
              <div class="text-gray-600">ตรวจสอบบริการดาวเทียม Starlink</div>
              <span class="text-green-600">🛰️ เทคโนโลยีใหม่</span>
            </div>
            <div class="p-2 rounded-lg bg-green-50 border-l-4 border-green-500 text-xs">
              <span class="font-medium text-green-800">ตรวจสอบ 3500 MHz</span>
              <div class="text-gray-600">คลื่นความถี่ 3500 MHz สำหรับ 5G</div>
              <span class="text-green-600">📶 5G</span>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">TCI สถานีฐาน</span>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">ร้องเรียนตั้งเสา TCI</span>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">ตรวจ ISP</span>
            </div>
          </div>
          <div class="space-y-1.5">
            <div class="detail-item">
              <span class="font-medium text-gray-700">ตรวจ IMT ประมูล</span>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">ตรวจจัดสรร 2568</span>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">Single Grid</span>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">แจ้งรื้อถอนเสา</span>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">ตรวจสถานประกอบกิจการ_เสิงสาง</span>
            </div>
          </div>
        </div>
      </div>

      <!-- คลื่นรบกวน Details -->
      <div v-else-if="activeTab === 'interference'" class="content-panel">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-2xl">⚠️</span>
          <span class="text-lg font-bold text-red-700">งานแก้ไขปัญหาคลื่นรบกวน</span>
          <span class="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-sm font-bold">3 รายการ - งานเร่งด่วน</span>
          <button @click="activeTab = null" class="ml-auto w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center text-sm">✕</button>
        </div>
        <div class="flex justify-center">
          <div class="space-y-2 max-w-md">
            <div class="p-3 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 urgent-card">
              <div class="flex items-center gap-2">
                <span class="text-xl">✈️</span>
                <div>
                  <div class="font-bold text-red-800 text-sm">รบกวนการบิน 2568</div>
                  <div class="text-[10px] text-gray-600">FM และอุปกรณ์อิเล็กทรอนิกส์</div>
                </div>
              </div>
              <div class="flex items-center gap-3 mt-2">
                <div class="text-center">
                  <div class="text-2xl font-bold text-red-600">29</div>
                  <div class="text-[10px] text-gray-500">ครั้งทั้งหมด</div>
                </div>
                <div class="text-xl text-gray-300">→</div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-green-600">9</div>
                  <div class="text-[10px] text-gray-500">แก้ไขแล้ว</div>
                </div>
              </div>
              <div class="mt-1 text-[10px] text-red-600 font-medium urgent-badge">🔴 ความสำคัญสูงมาก</div>
            </div>
            <div class="p-2 rounded-lg bg-orange-50 border-l-4 border-orange-500 text-xs">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                <span class="font-medium text-orange-800">รบกวน IMT_2568</span>
                <span class="ml-auto text-[10px] px-1.5 py-0.5 bg-orange-200 text-orange-700 rounded">🟠 สูง</span>
              </div>
              <div class="text-gray-600 mt-0.5 ml-4">คลื่นรบกวนย่าน IMT กระทบ 4G/5G 6 ครั้ง รบกวนกล้อง 9 ครั้ง</div>
            </div>
            <div class="p-2 rounded-lg bg-orange-50 border-l-4 border-orange-500 text-xs">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                <span class="font-medium text-orange-800">รบกวน V2K_โคราช</span>
                <span class="ml-auto text-[10px] px-1.5 py-0.5 bg-orange-200 text-orange-700 rounded">🟠 สูง</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ตามการร้องขอ Details -->
      <div v-else-if="activeTab === 'request'" class="content-panel">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-2xl">📞</span>
          <span class="text-lg font-bold text-purple-700">งานตามการร้องขอ</span>
          <span class="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">6 รายการ</span>
          <button @click="activeTab = null" class="ml-auto w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center text-sm">✕</button>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="space-y-1.5">
            <div class="p-2 rounded-lg bg-purple-50 border-l-4 border-purple-500">
              <div class="font-medium text-purple-800 text-sm">เรื่องร้องเรียน 2568</div>
              <div class="text-xs text-gray-600">รวบรวมเรื่องร้องเรียนจากประชาชน</div>
              <div class="text-lg font-bold text-purple-600">11 ครั้ง</div>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">ซื้อซิม 2568</span>
              <div class="text-gray-500">ตรวจสอบการจำหน่ายซิมการ์ด</div>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">ตรวจเคเบิ้ล</span>
              <div class="text-gray-500">ตรวจสอบผู้ประกอบกิจการเคเบิลทีวี</div>
            </div>
          </div>
          <div class="space-y-1.5">
            <div class="detail-item">
              <span class="font-medium text-gray-700">ตู้เติมเงิน K4</span>
              <div class="text-gray-500">ตรวจสอบตู้เติมเงินมือถือ</div>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">ตรวจ บจ.ไซเบกซ่า</span>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">ตรวจ หจก. KBN NETWORK</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ภารกิจพิเศษ Details -->
      <div v-else-if="activeTab === 'special'" class="content-panel">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-2xl">🎖️</span>
          <span class="text-lg font-bold text-orange-700">งานสนับสนุนภารกิจพิเศษ</span>
          <span class="px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-sm font-bold">8 รายการ</span>
          <button @click="activeTab = null" class="ml-auto w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center text-sm">✕</button>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="space-y-1.5">
            <div class="p-2 rounded-lg bg-orange-50 border-l-4 border-orange-500">
              <div class="font-medium text-orange-800 text-sm">คุมสอบครู 2568</div>
              <div class="text-xs text-gray-600">สนับสนุนการคุมสอบครูผู้ช่วย/สอบบรรจุ</div>
              <div class="text-lg font-bold text-orange-600">15 ครั้ง</div>
            </div>
            <div class="p-2 rounded-lg bg-amber-50 border-l-4 border-amber-500 text-xs">
              <div class="flex items-center gap-1">
                <span>👑</span>
                <span class="font-medium text-amber-800">ถวายความปลอดภัย 2568</span>
              </div>
              <div class="text-gray-600">สนับสนุนภารกิจในพระราชพิธี</div>
            </div>
            <div class="p-2 rounded-lg bg-red-50 border-l-4 border-red-500 text-xs">
              <div class="flex items-center gap-1">
                <span>🎖️</span>
                <span class="font-medium text-red-800">ขยายสัญญาณ ชายแดน</span>
              </div>
              <div class="text-gray-600">พื้นที่ชายแดน/มีการปะทะ</div>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">โดรนบุก-ภารกิจพิเศษ</span>
            </div>
          </div>
          <div class="space-y-1.5">
            <div class="detail-item">
              <span class="font-medium text-gray-700">งานวิ่ง ชัยภูมิ ม.ค. 2568</span>
              <div class="text-gray-500">สนับสนุนงานวิ่งมาราธอน</div>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">ตำรวจขอความร่วมมือเบอร์โทร</span>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">ศาลยุติธรรมภาค 3</span>
            </div>
            <div class="detail-item">
              <span class="font-medium text-gray-700">ตรวจตามมติ</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Summary Bar -->
    <div class="mt-3 p-2 rounded-lg bg-gradient-to-r from-slate-100 to-blue-100 border border-slate-300">
      <div class="flex items-center justify-center gap-6 text-sm">
        <div class="text-center">
          <span class="text-2xl font-bold text-slate-700">34</span>
          <span class="text-gray-500 ml-1">รายการ</span>
        </div>
        <div class="h-6 w-px bg-gray-300"></div>
        <div class="text-center text-red-600">
          <span class="font-bold">29</span> ครั้งรบกวนการบิน
        </div>
        <div class="h-6 w-px bg-gray-300"></div>
        <div class="text-center text-green-600">
          <span class="font-bold">31%</span> แก้ไขแล้ว
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
.card-orange {
  background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%);
  border-color: #fdba74;
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
.card-orange-active {
  background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
  border-color: #f97316;
  box-shadow: 0 0 25px rgba(249, 115, 22, 0.5), 0 12px 24px -8px rgba(0, 0, 0, 0.15);
}

/* Hover effects - lift and glow */
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

/* Glow layer on hover */
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
.glow-orange { box-shadow: inset 0 0 20px rgba(249, 115, 22, 0.3), 0 0 40px rgba(249, 115, 22, 0.4); }

/* Ripple effect on click */
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

/* Default view animations */
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

/* CTA prompt with pulse */
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

/* Content panel slide-in */
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

/* Detail items with hover effect */
.detail-item {
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  background: white;
  border: 1px solid #e5e7eb;
  font-size: 0.75rem;
  transition: all 0.2s ease;
}

.detail-item:hover {
  border-color: #93c5fd;
  background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%);
  transform: translateX(4px);
}

/* Urgent card animation */
.urgent-card {
  animation: urgentPulse 2s ease-in-out infinite;
}

@keyframes urgentPulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.3);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(239, 68, 68, 0);
  }
}

.urgent-badge {
  animation: badgeBlink 1.5s ease-in-out infinite;
}

@keyframes badgeBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
</style>
