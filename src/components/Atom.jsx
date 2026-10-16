import { useEffect, useRef } from 'react'
import { rings } from '../data'

const ORBIT = 'M -170 0 a 170 62 0 1 0 340 0 a 170 62 0 1 0 -340 0'
const ANGLES = [0, 60, 120]
const DURATIONS = ['5.2s', '7s', '9.4s']

// อะตอม React: สามวงโคจร = Frontend / Backend / Security
export default function Atom() {
  const wrap = useRef(null)

  useEffect(() => {
    const el = wrap.current
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0
    let raf = 0
    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2
      ty = (e.clientY / window.innerHeight - 0.5) * 2
    }
    const tick = () => {
      cx += (tx - cx) * 0.06
      cy += (ty - cy) * 0.06
      el.style.transform = `rotateY(${cx * 14}deg) rotateX(${-cy * 12}deg)`
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('pointermove', onMove)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="atom-stage">
      <div className="atom-halo" aria-hidden="true" />
      <div className="atom-tilt" ref={wrap}>
        <svg
          className="atom"
          viewBox="-200 -200 400 400"
          role="img"
          aria-label="โลโก้อะตอมแบบ React มีสามวงโคจรแทน Frontend, Backend และ Security"
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="core">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#5ce1ff" />
              <stop offset="100%" stopColor="#5ce1ff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g className="atom-spin">
            {rings.map((r, i) => (
              <g key={r.id} transform={`rotate(${ANGLES[i]})`}>
                <ellipse
                  rx="170"
                  ry="62"
                  fill="none"
                  stroke={r.color}
                  strokeWidth="5"
                  opacity="0.9"
                  filter="url(#glow)"
                />
                <circle r="9" fill="#fff" filter="url(#glow)">
                  <animateMotion
                    dur={DURATIONS[i]}
                    repeatCount="indefinite"
                    path={ORBIT}
                    rotate="0"
                  />
                </circle>
              </g>
            ))}
          </g>
          <circle className="atom-core" r="46" fill="url(#core)" />
          <circle r="15" fill="#fff" filter="url(#glow)" />
        </svg>
      </div>
      <ul className="atom-legend">
        {rings.map((r) => (
          <li key={r.id} style={{ '--c': r.color }}>
            {r.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
