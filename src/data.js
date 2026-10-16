// ข้อมูลทั้งหมดของเว็บอยู่ในไฟล์นี้ — แก้ที่นี่ที่เดียว
export const profile = {
  nameTh: 'พบพร จิตโสภา',
  nameEn: 'Pobphon Jitsopha',
  tagline:
    'นักศึกษา IT ปี 4 ที่สร้างเว็บด้วย React และ Node.js และสนใจความปลอดภัยของระบบ',
  status: 'กำลังหาที่ฝึกงานสหกิจ 1 ม.ค. – 30 เม.ย. 2570 (Frontend / Backend)',
  photo: '/me.jpg', // ไม่ต้องการแสดงรูป: ตั้งเป็น ''
  // ใส่อีเมลเมื่ออยากให้แสดงปุ่มติดต่อ (ว่างไว้ = ไม่แสดง)
  email: '',
  github: 'https://github.com/pobphon11',
  tryhackme: 'https://tryhackme.com/p/pobphongt',
  siteRepo: 'https://github.com/pobphon11/pobphon11.github.io',
}

export const about = [
  'ผมเรียนปี 4 คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม ทำโปรเจกต์เว็บเป็นทีม 3 โปรเจกต์ ตั้งแต่ออกแบบฐานข้อมูล เขียน API ไปจนถึงทำหน้าจอด้วย React',
  'นอกห้องเรียนผมฝึกด้าน Cybersecurity บน TryHackMe และอบรมโครงการ SOC ซึ่งทำให้ผมมองเรื่องการยืนยันตัวตนและการเก็บความลับในโค้ดจริงจังขึ้น',
]

export const education = {
  school: 'มหาวิทยาลัยศรีปทุม',
  faculty: 'คณะเทคโนโลยีสารสนเทศ',
  year: 'ชั้นปีที่ 4',
}

// ทุกโปรเจกต์: บอกส่วนที่ผมทำ และส่วนของเพื่อนร่วมทีมตามจริง
export const projects = [
  {
    id: 'edu',
    title: 'For Education System',
    summary:
      'เว็บแพลตฟอร์มคอร์สเรียนออนไลน์ มีคอร์ส บทเรียน แบบทดสอบ การสั่งซื้อ และหน้าผู้ดูแล',
    when: 'ต.ค. – พ.ย. 2025',
    team: 'ทีม 3 คน',
    stack: ['React 19', 'Vite', 'Node.js', 'Express 5', 'MongoDB', 'JWT'],
    mine: [
      'เขียน schema ตั้งต้น วางโครงสร้าง backend และเชื่อมฐานข้อมูล MongoDB (Mongoose)',
      'พัฒนา REST API: คอร์ส หมวดหมู่ section ความคืบหน้าการเรียน และการแจ้งเตือน',
      'ทำระบบ login / register / reset password และ middleware ควบคุมสิทธิ์เข้าคอร์สตามสถานะการชำระเงิน',
      'ทำหน้า Profile, Purchases, About Us และเชื่อมกับ API',
    ],
    others: 'เพื่อนทำ Quiz, Workshop, Certificates, Lesson page และ Admin dashboard',
    links: [
      { label: 'Source code', href: 'https://github.com/pobphon11/Edu' },
      {
        label: 'Commit ของผม',
        href: 'https://github.com/pobphon11/Edu/commits/pobphon?author=pobphon11',
      },
      { label: 'Repo ต้นฉบับ', href: 'https://github.com/ALtzaza/Edu' },
    ],
  },
  {
    id: 'slideme',
    title: 'Slide Me',
    summary: 'เว็บแอปเรียกรถ/ขนส่ง ผู้ใช้จองงาน คนขับรับงาน มีแผนที่ ชำระเงิน และแชต',
    when: 'พ.ย. 2024 – เม.ย. 2025',
    team: 'ทีม 4 คน',
    stack: ['React', 'Vite', 'Node.js', 'Socket.IO', 'MySQL'],
    mine: [
      'ทำ backend ระบบแชตเรียลไทม์ระหว่างผู้ใช้กับคนขับด้วย Socket.IO: ห้องแชต บริการส่ง/ดึงข้อความ',
      'เพิ่ม route การจองและงาน',
      'ทำ UI ต้นแบบด้วย React: Navbar, Home, จัดการผู้ใช้/คนขับ, อนุมัติคนขับ',
    ],
    others:
      'เพื่อนทำการส่ง/รับงานด้วย socket, หน้าคนขับ, แผนที่, ราคา, ชำระเงิน และ geocode',
    links: [
      { label: 'Source code', href: 'https://github.com/pobphon11/slideme' },
      {
        label: 'Commit ของผม',
        href: 'https://github.com/pobphon11/slideme/commits/pobphon?author=pobphon11',
      },
      { label: 'UI ต้นแบบ', href: 'https://github.com/pobphon11/Project-Slide-Me' },
    ],
  },
  {
    id: 'tax',
    title: 'Tax Chatbot',
    summary: 'แชตบอตตอบคำถามภาษีเป็นภาษาไทย ใช้ RAG ค้นความรู้แล้วให้โมเดลตอบ',
    when: 'เม.ย. 2026',
    team: 'ทีม 2 คน',
    stack: ['React 19', 'Vite'],
    mine: [
      'ทำ frontend หน้าแชต: หน้าต่างแชต ข้อความ ช่องพิมพ์ sidebar คำถามแนะนำ แอนิเมชันพิมพ์',
      'สร้าง API client แบบ mock เพื่อพัฒนา UI ก่อน backend เสร็จ และกำหนดรูปแบบ request / response ให้เชื่อมกับ backend',
    ],
    others: 'เพื่อนทำ backend: FastAPI, Ollama (Llama 3), FAISS และข้อมูลภาษี',
    links: [
      { label: 'Source code', href: 'https://github.com/pobphon11/tax-chatbot' },
      { label: 'Backend ของเพื่อน', href: 'https://github.com/ALtzaza/tax_chatbot' },
    ],
  },
]

// สามวงโคจรของอะตอม = สามกลุ่มทักษะ
export const rings = [
  {
    id: 'frontend',
    name: 'Frontend',
    color: '#5ce1ff',
    skills: ['React', 'Vite', 'JavaScript', 'HTML / CSS'],
  },
  {
    id: 'backend',
    name: 'Backend',
    color: '#8b7dff',
    skills: ['Node.js / Express', 'REST API', 'JWT', 'Socket.IO', 'MongoDB', 'MySQL'],
  },
  {
    id: 'security',
    name: 'Security',
    color: '#ffb454',
    skills: [
      'Python (สคริปต์ pentest ใน lab)',
      'TryHackMe: Jr Penetration Tester',
      'พื้นฐาน SOC และอ่าน log (กำลังเรียน)',
    ],
  },
]

export const tools = ['Git / GitHub', 'branch, merge, แก้ conflict']

export const certs = [
  {
    name: 'Ethical Hacker',
    by: 'Cisco Networking Academy',
    date: '19 มิ.ย. 2026',
    id: 'Cert ID 7da7f058-d3ed-4c9a-b3d7-0ac0b3886417',
  },
  {
    name: 'Jr Penetration Tester Learning Path (30 ชม. 40 นาที)',
    by: 'TryHackMe',
    date: '23 มี.ค. 2026',
    id: 'THM-UFKNINWLTA',
  },
  {
    name: 'โครงการบ่มเพาะผู้เชี่ยวชาญรุ่นใหม่ด้านศูนย์ปฏิบัติการความมั่นคงปลอดภัยไซเบอร์ (SOC)',
    by: 'มหาวิทยาลัยเทคโนโลยีมหานคร ร่วมกับ สป.อว.',
    date: '15 มิ.ย. – 25 ก.ค. 2026',
  },
  {
    name: 'Basic Cybersecurity',
    by: 'NCSA (สกมช.)',
    date: '21 มี.ค. 2026',
    id: 'SPG-1D16UHQ2M5R3Y',
  },
  {
    name: 'NCSA CTF Boot Camp และแนวอาชีพด้านไซเบอร์',
    by: 'NCSA / THNCA',
    date: '25–26 เม.ย. 2026',
  },
  {
    name: 'ผู้เข้าร่วมแข่ง NCSA x CISCO CTF 2026',
    by: 'NCSA / Cisco',
    date: '27 มิ.ย. 2026',
  },
  {
    name: 'Cybersecurity for General Professional',
    by: 'AIS Academy',
    date: 'เรียนออนไลน์',
    id: 'CO0040260002B776',
  },
]

export const otherWork = [
  {
    label: 'Csi205 Front-end development (หลายหน้า)',
    href: 'https://pobphon11.github.io/_multipage',
  },
]
