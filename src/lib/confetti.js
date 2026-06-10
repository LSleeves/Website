// Tiny dependency-free canvas confetti.
const COLORS = ['#38bdf8', '#0a83c6', '#7dd3fc', '#fbbf24', '#34d399', '#f472b6', '#f8fafc']

export function confettiBurst({ count = 140, origin } = {}) {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const canvas = document.createElement('canvas')
  canvas.className = 'confetti-canvas'
  canvas.setAttribute('aria-hidden', 'true')
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = window.innerWidth * dpr
  canvas.height = window.innerHeight * dpr
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  document.body.appendChild(canvas)
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)

  const ox = origin?.x ?? window.innerWidth / 2
  const oy = origin?.y ?? window.innerHeight * 0.35

  const particles = Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2
    const speed = 5 + Math.random() * 9
    return {
      x: ox,
      y: oy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 4,
      w: 5 + Math.random() * 6,
      h: 8 + Math.random() * 8,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      color: COLORS[(Math.random() * COLORS.length) | 0],
      life: 1,
    }
  })

  const start = performance.now()
  function frame(now) {
    const t = (now - start) / 1000
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    let alive = 0
    for (const p of particles) {
      p.vy += 0.22 // gravity
      p.vx *= 0.985
      p.x += p.vx
      p.y += p.vy
      p.rot += p.vr
      p.life = Math.max(0, 1 - t / 3)
      if (p.life <= 0 || p.y > window.innerHeight + 30) continue
      alive++
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rot)
      ctx.globalAlpha = p.life
      ctx.fillStyle = p.color
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
      ctx.restore()
    }
    if (alive > 0 && t < 4) {
      requestAnimationFrame(frame)
    } else {
      canvas.remove()
    }
  }
  requestAnimationFrame(frame)
}
