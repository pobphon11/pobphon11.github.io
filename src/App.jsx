import Particles from './components/Particles'
import Atom from './components/Atom'
import {
  profile,
  about,
  education,
  projects,
  rings,
  tools,
  certs,
  otherWork,
} from './data'

export default function App() {
  return (
    <>
      <Particles />
      <a className="skip" href="#projects">
        ข้ามไปผลงาน
      </a>

      <header className="nav">
        <a className="brand" href="#top" aria-label="กลับขึ้นด้านบน">
          pobphon11
        </a>
        <nav aria-label="เมนูหลัก">
          <a href="#projects">ผลงาน</a>
          <a href="#skills">ทักษะ</a>
          <a href="#certs">ใบรับรอง</a>
          <a href="#about">เกี่ยวกับผม</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <h1>
              <span className="line l1">
                <span>{profile.nameTh}</span>
              </span>
              <span className="line l2">
                <span>{profile.nameEn}</span>
              </span>
            </h1>
            <p className="line l3 tagline">
              <span>{profile.tagline}</span>
            </p>
            <p className="line l4 status">
              <span>
                <i className="dot" aria-hidden="true" />
                {profile.status}
              </span>
            </p>
            <div className="actions line l5">
              <span>
                <a className="btn primary" href="#projects">
                  ดูผลงาน
                </a>
                <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </span>
            </div>
          </div>
          <Atom />
        </section>

        <section id="projects" className="block">
          <h2>ผลงานและโค้ด</h2>
          <p className="lede">
            ทุกโปรเจกต์เป็นงานทีม ผมระบุไว้ว่าส่วนไหนผมทำ ส่วนไหนเป็นของเพื่อน
            และลิงก์ไปที่ commit ของผมให้ตรวจดูได้
          </p>
          <div className="projects">
            {projects.map((p, i) => (
              <article key={p.id} className={'project' + (i === 0 ? ' lead' : '')}>
                <header>
                  <h3>{p.title}</h3>
                  <p className="meta">
                    {p.when} · {p.team}
                  </p>
                </header>
                <p className="summary">{p.summary}</p>
                <ul className="stack" aria-label="เทคโนโลยีที่ใช้">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <h4>ส่วนที่ผมทำ</h4>
                <ul className="mine">
                  {p.mine.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
                <p className="others">{p.others}</p>
                <p className="links">
                  {p.links.map((l, j) => (
                    <a
                      key={l.href}
                      className={j === 0 ? 'code' : ''}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                    </a>
                  ))}
                </p>
              </article>
            ))}
          </div>
          <p className="more">
            งานอื่น:{' '}
            {otherWork.map((o) => (
              <a key={o.href} href={o.href} target="_blank" rel="noreferrer">
                {o.label}
              </a>
            ))}
            {' · '}
            <a href={profile.github + '?tab=repositories'} target="_blank" rel="noreferrer">
              repo ทั้งหมดบน GitHub
            </a>
          </p>
        </section>

        <section id="skills" className="block">
          <h2>ทักษะ</h2>
          <p className="lede">สามวงโคจรของอะตอมด้านบนคือสามกลุ่มนี้</p>
          <div className="skills">
            {rings.map((r) => (
              <div key={r.id} className="skill" style={{ '--c': r.color }}>
                <h3>{r.name}</h3>
                <ul>
                  {r.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="tools">เครื่องมือ: {tools.join(' · ')}</p>
        </section>

        <section id="certs" className="block">
          <h2>ใบรับรองและการอบรม</h2>
          <ul className="certs">
            {certs.map((c) => (
              <li key={c.name}>
                <p className="cert-date">{c.date}</p>
                <div>
                  <p className="cert-name">{c.name}</p>
                  <p className="cert-by">
                    {c.by}
                    {c.id ? <span className="cert-id"> · {c.id}</span> : null}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="block about">
          {profile.photo ? (
            <img
              className="photo"
              src={profile.photo}
              alt={`ภาพถ่ายของ ${profile.nameTh}`}
              width="300"
              height="360"
              loading="lazy"
            />
          ) : null}
          <div>
            <h2>เกี่ยวกับผม</h2>
            {about.map((t) => (
              <p key={t}>{t}</p>
            ))}
            <p className="edu">
              {education.school} · {education.faculty} · {education.year}
            </p>
          </div>
        </section>

        <section className="block contact">
          <h2>ติดต่อ</h2>
          <p className="lede">กำลังหาที่ฝึกงานสหกิจสาย Frontend / Backend ทักมาได้เลย</p>
          <p className="contact-links">
            {profile.email ? <a className="btn primary" href={`mailto:${profile.email}`}>อีเมล</a> : null}
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn" href={profile.tryhackme} target="_blank" rel="noreferrer">
              TryHackMe
            </a>
          </p>
        </section>
      </main>

      <footer className="foot">
        <p>
          เว็บนี้สร้างด้วย React + Vite ดูโค้ดได้ที่{' '}
          <a href={profile.siteRepo} target="_blank" rel="noreferrer">
            pobphon11/pobphon11.github.io
          </a>
        </p>
      </footer>
    </>
  )
}
