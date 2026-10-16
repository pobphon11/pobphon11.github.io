# Pobphon Jitsopha — Portfolio

เว็บ portfolio ของพบพร จิตโสภา (นักศึกษา IT ปี 4 ศรีปทุม) สร้างด้วย React + Vite
เว็บจริง: **https://pobphon11.github.io**

อะตอม React ในหน้าแรกมีสามวงโคจร แทน Frontend / Backend / Security ซึ่งเป็นสามกลุ่มทักษะของผม

## Tech
- React 19 + Vite 7
- CSS ล้วน (ไม่ใช้ UI library), canvas สำหรับแสงลอย, SVG สำหรับอะตอม
- ฟอนต์ Sora และ IBM Plex Sans Thai (bundle ผ่าน `@fontsource` ไม่พึ่ง CDN)
- เคารพ `prefers-reduced-motion`, ใช้ได้กับคีย์บอร์ด, responsive ถึงจอมือถือ

## รันในเครื่อง
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # ผลลัพธ์อยู่ใน dist/
npm run preview  # ดูผลลัพธ์ที่ build แล้ว
```

## แก้ข้อมูล
ข้อมูลทั้งหมดอยู่ที่ `src/data.js` (โปรเจกต์ ทักษะ ใบรับรอง ลิงก์)
- ใส่อีเมลที่ `profile.email` เพื่อแสดงปุ่มอีเมลในส่วนติดต่อ
- ไม่ต้องการแสดงรูป: ตั้ง `profile.photo` เป็น `''`
- เปลี่ยนรูปที่ `public/me.jpg`

## Deploy (GitHub Pages)
Push เข้า `main` แล้ว GitHub Actions (`.github/workflows/deploy.yml`) จะ build และ deploy ให้เอง
ตั้งค่าครั้งเดียว: Settings → Pages → Build and deployment → Source = **GitHub Actions**

## โครงสร้าง
```
src/
  App.jsx                   หน้าเว็บทั้งหมด
  data.js                   เนื้อหา
  styles.css                สไตล์และอนิเมชัน
  components/Atom.jsx       อะตอม React 3 วงโคจร
  components/Particles.jsx  แสงลอยๆ (canvas)
public/                     favicon และรูป
```

## License
MIT — ดู [LICENSE](LICENSE)
