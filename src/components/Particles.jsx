import { useEffect, useRef } from 'react'

const COLORS = ['92,225,255', '139,125,255', '255,180,84']

// แสงลอยๆ ด้านหลังทั้งหน้า: ลอยขึ้นช้าๆ และขยับตามเมาส์เล็กน้อย
export default function Particles() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0
    let h = 0
    let raf = 0
    const mouse = { x: 0, y: 0 }
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const make = () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      vy: -(Math.random() * 0.25 + 0.05),
      vx: (Math.random() - 0.5) * 0.08,
      depth: Math.random() * 0.8 + 0.2,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
      phase: Math.random() * Math.PI * 2,
    })

    let dots = []
    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(Math.min(90, (w * h) / 16000))
      dots = Array.from({ length: count }, make)
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)
      for (const d of dots) {
        if (!reduce) {
          d.y += d.vy * d.depth * 2
          d.x += d.vx
          if (d.y < -10) {
            d.y = h + 10
            d.x = Math.random() * w
          }
        }
        const px = d.x + mouse.x * 18 * d.depth
        const py = d.y + mouse.y * 18 * d.depth
        const a = 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(t / 1400 + d.phase))
        const g = ctx.createRadialGradient(px, py, 0, px, py, d.r * 6)
        g.addColorStop(0, `rgba(${d.c},${a})`)
        g.addColorStop(1, `rgba(${d.c},0)`)
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(px, py, d.r * 6, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = (t) => {
      draw(t)
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e) => {
      mouse.x = e.clientX / w - 0.5
      mouse.y = e.clientY / h - 0.5
    }
    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden && !reduce) raf = requestAnimationFrame(loop)
    }

    resize()
    if (reduce) draw(0)
    else raf = requestAnimationFrame(loop)
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={ref} className="particles" aria-hidden="true" />
}
