---
theme: apple-basic
title: รายงานผลการปฏิบัติงาน ประจำปี 2568 กสทช เขต 23.
info: |
  ## รายงานผลการปฏิบัติงาน สำนักงาน กสทช. เขต 23  ประจำปี 2568
  
layout: intro
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'Noto Sans Thai'
  serif: 'Noto Sans Thai'
  mono: 'Fira Code'
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&family=Sarabun:wght@400;500;600;700&display=swap');

:root {
  --slidev-theme-font-family: 'Noto Sans Thai', 'Sarabun', sans-serif;
}

* {
  font-family: 'Noto Sans Thai', 'Sarabun', sans-serif !important;
}

/* Force Thai font on canvas/charts */
canvas {
  font-family: 'Noto Sans Thai', 'Sarabun', sans-serif !important;
}
</style>

# รายงานผลการปฏิบัติงาน
# ประจำปี 2568

<div class="pt-12">
  <span class="px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-xl font-medium">
    สำนักงาน กสทช เขต 23
  </span>
</div>

<div class="absolute bottom-10 right-10">
  <span class="text-sm text-gray-400">
    NBTC 23
  </span>
</div>

---
transition: fade-out
layout: default
---

# ภาพรวมการดำเนินงาน

<div class="grid grid-cols-2 gap-6 pt-6">

<div class="p-6 rounded-2xl bg-blue-50 border border-blue-100 hover:shadow-lg transition-shadow">
  <div class="text-4xl mb-4">📋</div>
  <h3 class="text-xl font-semibold text-blue-600">ตรวจสอบและกำกับดูแล</h3>
  <p class="text-sm text-gray-500 mt-2">การกำกับดูแลกิจการโทรคมนาคม วิทยุ และโทรทัศน์</p>
</div>

<div class="p-6 rounded-2xl bg-green-50 border border-green-100 hover:shadow-lg transition-shadow">
  <div class="text-4xl mb-4">📄</div>
  <h3 class="text-xl font-semibold text-green-600">งานใบอนุญาต</h3>
  <p class="text-sm text-gray-500 mt-2">การออกใบอนุญาตประกอบกิจการ</p>
</div>

<div class="p-6 rounded-2xl bg-orange-50 border border-orange-100 hover:shadow-lg transition-shadow">
  <div class="text-4xl mb-4">🛡️</div>
  <h3 class="text-xl font-semibold text-orange-600">งานคุ้มครองผู้บริโภค</h3>
  <p class="text-sm text-gray-500 mt-2">การรับเรื่องร้องเรียนและคุ้มครองสิทธิผู้บริโภค</p>
</div>

<div class="p-6 rounded-2xl bg-purple-50 border border-purple-100 hover:shadow-lg transition-shadow">
  <div class="text-4xl mb-4">🏢</div>
  <h3 class="text-xl font-semibold text-purple-600">งานอำนวยการ</h3>
  <p class="text-sm text-gray-500 mt-2">การบริหารจัดการองค์กรและทรัพยากร</p>
</div>

</div>

---
layout: section
---


# 📋 งานตรวจสอบตามแผน
## Planned Inspections 2568

---
layout: default
clicks: 5
---

# งานตรวจสอบตามแผน <span class="text-lg font-normal text-gray-500">(5 หมวด)</span>

<div class="grid grid-cols-5 gap-2 mt-2">
  <div v-click="1" class="p-2 rounded-lg bg-gradient-to-b from-blue-50 to-blue-100 border border-blue-200 hover:shadow-md transition-all">
    <div class="text-center">
      <span class="text-lg">📡</span>
      <div class="text-[10px] text-gray-500">มาตรฐานการแพร่</div>
      <div class="text-base font-bold text-blue-700">212</div>
      <div class="text-[9px] px-1 py-0.5 bg-green-200 text-green-700 rounded mt-1">104.4%</div>
    </div>
  </div>

  <div v-click="2" class="p-2 rounded-lg bg-gradient-to-b from-purple-50 to-purple-100 border border-purple-200 hover:shadow-md transition-all">
    <div class="text-center">
      <span class="text-lg">📺</span>
      <div class="text-[10px] text-gray-500">DTV</div>
      <div class="text-base font-bold text-purple-700">11</div>
      <div class="text-[9px] px-1 py-0.5 bg-purple-200 text-purple-700 rounded mt-1">สถานี</div>
    </div>
  </div>

  <div v-click="3" class="p-2 rounded-lg bg-gradient-to-b from-orange-50 to-orange-100 border border-orange-200 hover:shadow-md transition-all">
    <div class="text-center">
      <span class="text-lg">📶</span>
      <div class="text-[10px] text-gray-500">EMF</div>
      <div class="text-base font-bold text-orange-700">11</div>
      <div class="text-[9px] px-1 py-0.5 bg-orange-200 text-orange-700 rounded mt-1">ครั้ง</div>
    </div>
  </div>

  <div v-click="4" class="p-2 rounded-lg bg-gradient-to-b from-green-50 to-green-100 border border-green-200 hover:shadow-md transition-all">
    <div class="text-center">
      <span class="text-lg">🚗</span>
      <div class="text-[10px] text-gray-500">นอกที่ตั้ง</div>
      <div class="text-base font-bold text-green-700">20</div>
      <div class="text-[9px] px-1 py-0.5 bg-green-200 text-green-700 rounded mt-1">ครั้ง</div>
    </div>
  </div>

  <div v-click="5" class="p-2 rounded-lg bg-gradient-to-b from-teal-50 to-teal-100 border border-teal-200 hover:shadow-md transition-all">
    <div class="text-center">
      <span class="text-lg">🔍</span>
      <div class="text-[10px] text-gray-500">ครอบครอง</div>
      <div class="text-base font-bold text-teal-700">100%</div>
      <div class="text-[9px] px-1 py-0.5 bg-teal-200 text-teal-700 rounded mt-1">พิสูจน์ทราบ</div>
    </div>
  </div>
</div>

<div class="grid grid-cols-2 gap-4 mt-3">
  <div class="space-y-2">
    <div v-click="1" class="p-2 rounded-lg bg-blue-50 border-l-3 border-blue-500 text-xs">
      <div class="font-medium text-blue-700">📡 มาตรฐานการแพร่ (212 สถานี)</div>
      <div class="text-gray-600 flex justify-between mt-1">
        <span>นครราชสีมา <b>110</b></span>
        <span>ชัยภูมิ <b>51</b></span>
        <span>บุรีรัมย์ <b>51</b></span>
      </div>
    </div>
    <div v-click="2" class="p-2 rounded-lg bg-purple-50 border-l-3 border-purple-500 text-xs">
      <div class="font-medium text-purple-700">📺 สถานี DTV (11 สถานี)</div>
      <div class="text-gray-600">ตรวจสอบสถานีโทรทัศน์ดิจิทัล</div>
    </div>
    <div v-click="3" class="p-2 rounded-lg bg-orange-50 border-l-3 border-orange-500 text-xs">
      <div class="font-medium text-orange-700">📶 EMF (11 ครั้ง)</div>
      <div class="text-gray-600">ตรวจวัดคลื่นแม่เหล็กไฟฟ้า</div>
    </div>
    <div v-click="4" class="p-2 rounded-lg bg-green-50 border-l-3 border-green-500 text-xs">
      <div class="font-medium text-green-700">🚗 นอกที่ตั้ง (20 ครั้ง)</div>
      <div class="text-gray-600">ตรวจสอบภาคสนาม</div>
    </div>
  </div>

  <div class="flex flex-col justify-center items-center">
    <div class="text-center p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-blue-200 w-full">
      <div class="text-4xl font-bold text-blue-600"> ทั้งหมด 100 %</div>
      <!-- <div class="text-sm text-gray-500">หน่วยงาน/ครั้ง</div> -->
      <div class="mt-2 w-full bg-gray-200 rounded-full h-2">
        <div class="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style="width: 100%"></div>
      </div>
    </div>
  </div>
</div>

---
layout: section
---

# 📡 งานตรวจสอบนอกแผน
## Unplanned Inspections 2568

---
layout: default
---

# งานตรวจสอบนอกแผน <span class="text-lg font-normal text-gray-500">(5 หมวด, 34 รายการ)</span>

<UnplannedWorkTabs />

---
layout: default
---

# ภาพกิจกรรมงานตรวจสอบ <span class="text-lg font-normal text-gray-500">(4 กิจกรรม)</span>

<InspectionGallery />

---
layout: section
---

# 📄 งานใบอนุญาต
## Licensing (ม.ค. - พ.ย. 2568)


---
layout: default
---

# สถิติใบอนุญาตแยกตามประเภท

<div class="pt-2">
  <LicenseBarChart />
</div>

<div class="grid grid-cols-4 gap-3 mt-4">
  <div class="text-center p-3 rounded-xl bg-green-50 border border-green-100">
    <div class="text-2xl font-bold text-green-600">1,127</div>
    <div class="text-xs text-gray-500">โดรน</div>
  </div>
  <div class="text-center p-3 rounded-xl bg-blue-50 border border-blue-100">
    <div class="text-2xl font-bold text-blue-600">889</div>
    <div class="text-xs text-gray-500">วิทยุสมัครเล่น/ประชาชน</div>
  </div>
  <div class="text-center p-3 rounded-xl bg-orange-50 border border-orange-100">
    <div class="text-2xl font-bold text-orange-600">41</div>
    <div class="text-xs text-gray-500">อปท.</div>
  </div>
  <div class="text-center p-3 rounded-xl bg-purple-50 border border-purple-100">
    <div class="text-2xl font-bold text-purple-600">55</div>
    <div class="text-xs text-gray-500">มูลนิธิ/สมาคม</div>
  </div>
</div>

---
layout: two-cols
---

# สัดส่วนใบอนุญาต

<LicenseDoughnutChart />

::right::

<div class="pt-6">



### ไฮไลท์สำคัญ

- 🚁 **โดรน** มีสัดส่วนสูงสุด 53.3%
- 📻 **วิทยุสมัครเล่น/ประชาชน** อันดับ 2 ที่ 42.1%
- 💰 **รายได้รวม** 1,006,124 บาท
- 📈 **เฉลี่ย** 102 ใบ/เดือน (โดรน)





<div class="mt-4 p-3 rounded-xl bg-green-50 border-l-4 border-green-500 text-sm">
  <strong class="text-green-700">Insight:</strong> <span class="text-gray-600">โดรนเป็นใบอนุญาตที่มีความต้องการสูงสุด สะท้อนการเติบโตของอุตสาหกรรม UAV</span>
</div>



</div>

---
layout: default
---

# แนวโน้มการออกใบอนุญาตรายเดือน

<LicenseAreaChart />



<div class="mt-1 p-1 rounded-xl bg-gradient-to-r from-blue-50 to-green-50 border border-blue-100/50">
  <strong class="text-blue-700">แนวโน้ม:</strong> <span class="text-gray-700">โดรนมีความนิยมสม่ำเสมอ (เฉลี่ย 102 ใบ/เดือน) ขณะที่วิทยุสมัครเล่นมี peak ในเดือน ส.ค.-ก.ย. (134 ใบ)</span>
</div>



---
layout: default
---

# รายละเอียดค่าธรรมเนียม

<div class="grid grid-cols-2 gap-6 pt-4">

<div class="p-5 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
  <h3 class="text-lg font-semibold text-green-700 mb-4">รายได้ตามประเภท</h3>

  <div class="space-y-3">
    <div class="flex justify-between items-center">
      <span class="text-gray-600">วิทยุสมัครเล่น/ประชาชน</span>
      <span class="font-bold text-green-600">418,070 บาท</span>
    </div>
    <div class="flex justify-between items-center">
      <span class="text-gray-600">โดรน</span>
      <span class="font-bold text-green-600">241,178 บาท</span>
    </div>
    <div class="flex justify-between items-center">
      <span class="text-gray-600">อปท.</span>
      <span class="font-bold text-green-600">219,350 บาท</span>
    </div>
    <div class="flex justify-between items-center">
      <span class="text-gray-600">มูลนิธิ/สมาคม</span>
      <span class="font-bold text-green-600">127,419 บาท</span>
    </div>
    <div class="flex justify-between items-center pt-2 border-t border-green-300">
      <span class="font-semibold text-gray-700">รวมทั้งหมด</span>
      <span class="font-bold text-green-700 text-lg">1,006,124 บาท</span>
    </div>
  </div>
</div>

<div class="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
  <h3 class="text-lg font-semibold text-blue-700 mb-4">สถิติเด่น</h3>

  <div class="space-y-4">
    <div class="text-center p-3 rounded-xl bg-white/60">
      <div class="text-3xl font-bold text-blue-600">2,113</div>
      <div class="text-sm text-gray-500">ใบอนุญาตทั้งหมด</div>
    </div>
    <div class="text-center p-3 rounded-xl bg-white/60">
      <div class="text-3xl font-bold text-green-600">192</div>
      <div class="text-sm text-gray-500">เฉลี่ยต่อเดือน</div>
    </div>
    <div class="text-center p-3 rounded-xl bg-white/60">
      <div class="text-3xl font-bold text-orange-600">134</div>
      <div class="text-sm text-gray-500">สูงสุด (ส.ค./ก.ย.)</div>
    </div>
  </div>
</div>

</div>

---
layout: default
---

# การตรวจสอบร้านค้าจำหน่ายอุปกรณ์

<div class="grid grid-cols-2 gap-4 pt-2">

<div class="rounded-xl overflow-hidden shadow-lg border border-gray-200">
  <img src="/sectione/งานใบอนุญาต/ตรวจ อปท/LINE_ALBUM_ใบอนุญาต ตรวจร้านค้าโดรน_251210_1.jpg" class="w-full h-48 object-cover" />
  <div class="p-3 bg-white">
    <div class="text-sm font-semibold text-green-700">ตรวจร้านค้าโดรน</div>
    <div class="text-xs text-gray-500 mt-1">ต.หนองนาแซง อ.เมืองชัยภูมิ จ.ชัยภูมิ</div>
    <div class="text-xs text-gray-400">17 พ.ย. 2568</div>
  </div>
</div>

<div class="rounded-xl overflow-hidden shadow-lg border border-gray-200">
  <img src="/sectione/งานใบอนุญาต/ตรวจ อปท/LINE_ALBUM_ใบอนุญาต ตรวจร้านค้า สำรองจำหน่ายวิทย_.jpg" class="w-full h-48 object-cover" />
  <div class="p-3 bg-white">
    <div class="text-sm font-semibold text-blue-700">ตรวจร้านค้าวิทยุสื่อสาร</div>
    <div class="text-xs text-gray-500 mt-1">ถ.ยมราช อ.เมือง จ.นครราชสีมา</div>
    <div class="text-xs text-gray-400">16 พ.ค. 2568</div>
  </div>
</div>

</div>



<div class="mt-4 p-3 rounded-xl bg-gradient-to-r from-green-50 to-blue-50 border border-green-100/50">
  <strong class="text-green-700">ภารกิจ:</strong> <span class="text-gray-700">ตรวจสอบใบอนุญาตและมาตรฐานการจำหน่ายอุปกรณ์โดรนและวิทยุสื่อสารในพื้นที่</span>
</div>



---
layout: section
---

# 🛡️ งานคุ้มครองผู้บริโภค
## Consumer Protection

---
layout: full
class: bg-white
---

<img src="/sectione/คุ้มครอง/unnamed.png" class="w-full h-full object-contain" />

---
layout: default
---

# กิจกรรมจัดระเบียบสายสื่อสาร

<div class="grid grid-cols-2 gap-4 pt-2">

<div class="space-y-2">
  <div class="p-3 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200">
    <div class="flex items-center gap-3">
      <span class="text-2xl">🤝</span>
      <div>
        <div class="text-xs text-gray-500">ประชุมหารือร่วมกับ กฟภ. และผู้ประกอบการ</div>
        <div class="text-lg font-bold text-purple-700">9 ครั้ง</div>
      </div>
    </div>
  </div>

  <div class="p-3 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
    <div class="flex items-center gap-3">
      <span class="text-2xl">🚧</span>
      <div>
        <div class="text-xs text-gray-500">ลงพื้นที่ปฏิบัติงานจัดระเบียบร่วมกัน</div>
        <div class="text-lg font-bold text-blue-700">14 ครั้ง</div>
      </div>
    </div>
  </div>

  <div class="p-3 rounded-xl bg-gradient-to-r from-green-50 to-green-100 border border-green-200">
    <div class="flex items-center gap-3">
      <span class="text-2xl">✅</span>
      <div>
        <div class="text-xs text-gray-500">ดำเนินการจัดระเบียบแล้วเสร็จ (แผนปี 68-69)</div>
        <div class="text-lg font-bold text-green-700">31 เส้นทาง</div>
      </div>
    </div>
  </div>

  <div class="p-3 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200">
    <div class="flex items-center gap-3">
      <span class="text-2xl">📋</span>
      <div>
        <div class="text-xs text-gray-500">ประเมินผลการจัดระเบียบแล้ว</div>
        <div class="text-lg font-bold text-orange-700">24 เส้นทาง</div>
        <div class="text-xs text-gray-400">(ธ.ค. มีแผนตรวจเพิ่ม 7 เส้นทาง)</div>
      </div>
    </div>
  </div>
</div>

<div class="space-y-2">
  <div>
    <img src="/sectione/คุ้มครอง/LINE_ALBUM_งานคุ้มครอง ปี 2568_251210_1.jpg" class="w-full h-36 object-cover rounded-xl shadow-lg" />
    <div class="text-xs text-gray-500 mt-1 text-center">กิจกรรมจัดระเบียบสายฯ บนเสาไฟฟ้า กฟภ. จ.นครราชสีมา</div>
  </div>
  <div>
    <img src="/sectione/คุ้มครอง/LINE_ALBUM_งานคุ้มครอง ปี 2568_251210_2.jpg" class="w-full h-32 object-cover rounded-xl shadow-lg" />
  </div>
</div>

</div>

<div class="mt-2 p-2 rounded-xl bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 text-sm">
  <strong class="text-blue-700">หน่วยงานร่วม:</strong> <span class="text-gray-700">กฟภ. | NT | True | UIH | Symphony | Fibre</span>
</div>

---
layout: section
---

# 🏢 งานอำนวยการ
## Administrative Affairs






---
layout: default
---

# การเบิกจ่ายงบประมาณ ปี 2568

<div class="grid grid-cols-4 gap-3 pt-2">

<div class="text-center p-3 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
  <div class="text-2xl font-bold text-purple-600">4.59</div>
  <div class="text-xs text-gray-500">งบประมาณ (ล้าน)</div>
</div>

<div class="text-center p-3 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
  <div class="text-2xl font-bold text-green-600">3.57</div>
  <div class="text-xs text-gray-500">เบิกจ่ายแล้ว (ล้าน)</div>
</div>

<div class="text-center p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
  <div class="text-2xl font-bold text-blue-600">77.59%</div>
  <div class="text-xs text-gray-500">อัตราเบิกจ่าย</div>
</div>

<div class="text-center p-3 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
  <div class="text-2xl font-bold text-orange-600">Q4</div>
  <div class="text-xs text-gray-500">ไตรมาสปัจจุบัน</div>
</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded-xl bg-white/60 border border-gray-100">
  <div class="text-sm font-semibold text-slate-700 mb-2">เบิกจ่ายรายไตรมาส</div>
  <BudgetAreaChart />
</div>

<div class="p-3 rounded-xl bg-white/60 border border-gray-100">
  <div class="text-sm font-semibold text-slate-700 mb-2">สัดส่วนงบประมาณ</div>
  <BudgetBreakdownChart />
</div>

</div>

<div class="mt-2 text-xs text-gray-400 text-center">
  ข้อมูล ณ วันที่ 30 พฤศจิกายน 2568 | กสทช เขต 23
</div>

---
layout: default
---

# โครงการก่อสร้างโรงจอดรถยนต์

<div class="grid grid-cols-2 gap-4 pt-2">

<div class="space-y-3">
  <div class="p-3 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
    <div class="flex items-center gap-2">
      <span class="text-blue-500 text-lg">📋</span>
      <div>
        <div class="text-xs text-gray-500">สัญญาเลขที่</div>
        <div class="text-sm font-semibold text-blue-700">8680213</div>
      </div>
    </div>
  </div>

  <div class="p-3 rounded-xl bg-gradient-to-r from-green-50 to-green-100 border border-green-200">
    <div class="flex items-center gap-2">
      <span class="text-green-500 text-lg">💰</span>
      <div>
        <div class="text-xs text-gray-500">วงเงิน</div>
        <div class="text-sm font-semibold text-green-700">525,000 บาท</div>
      </div>
    </div>
  </div>

  <div class="p-3 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200">
    <div class="flex items-center gap-2">
      <span class="text-orange-500 text-lg">📅</span>
      <div>
        <div class="text-xs text-gray-500">ระยะเวลา</div>
        <div class="text-sm font-semibold text-orange-700">120 วัน (27 มิ.ย. - 26 ต.ค. 68)</div>
      </div>
    </div>
  </div>

  <div class="p-3 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200">
    <div class="flex items-center gap-2">
      <span class="text-purple-500 text-lg">🏢</span>
      <div>
        <div class="text-xs text-gray-500">ผู้รับจ้าง</div>
        <div class="text-sm font-semibold text-purple-700">บริษัท ศิววรการ มั่นคง จำกัด</div>
      </div>
    </div>
  </div>
</div>

<div class="space-y-2">
  <div class="grid grid-cols-2 gap-2">
    <img src="/sectione/งานอำนวยการ/LINE_ALBUM_งานก่อสร้างโรงจอดรถยนต์ 2568_251212_1.jpg" class="w-full h-28 object-cover rounded-lg shadow" />
    <img src="/sectione/งานอำนวยการ/LINE_ALBUM_งานก่อสร้างโรงจอดรถยนต์ 2568_251212_2.jpg" class="w-full h-28 object-cover rounded-lg shadow" />
  </div>
  <div>
    <img src="/sectione/งานอำนวยการ/LINE_ALBUM_งานก่อสร้างโรงจอดรถยนต์ 2568_251212_3.jpg" class="w-full h-28 object-cover rounded-lg shadow" />
  </div>
</div>

</div>



<div class="mt-3 p-3 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500">
  <div class="flex items-center gap-2">
    <span class="text-green-600 text-lg">✅</span>
    <span class="text-sm text-gray-700"><strong class="text-green-700">สถานะ:</strong> ส่งมอบงานครบ 3 งวด ตรวจรับถูกต้องครบถ้วน เบิกจ่ายเรียบร้อยแล้ว</span>
  </div>
</div>






---
layout: intro
class: text-center
---


# Thank You

<div class="pt-8">
  <span class="px-6 py-3 rounded-full bg-blue-100 text-blue-600 text-lg font-medium">
    สำนักงาน กสทช เขต 23.
  </span>
</div>



<div class="absolute bottom-10 right-10">
  <span class="text-xs text-gray-300">รายงานผลการปฏิบัติงาน ประจำปี 2568</span>
</div>
