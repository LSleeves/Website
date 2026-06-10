import { confettiBurst } from './confetti'

export function showToast(message, duration = 3200) {
  document.querySelectorAll('.toast').forEach((t) => t.remove())
  const el = document.createElement('div')
  el.className = 'toast'
  el.setAttribute('role', 'status')
  el.textContent = message
  document.body.appendChild(el)
  requestAnimationFrame(() => el.classList.add('show'))
  setTimeout(() => {
    el.classList.remove('show')
    setTimeout(() => el.remove(), 500)
  }, duration)
}

function togglePartyMode() {
  const root = document.documentElement
  const on = root.classList.toggle('party')
  if (on) {
    confettiBurst({ count: 200 })
    setTimeout(() => confettiBurst({ count: 120, origin: { x: window.innerWidth * 0.2, y: window.innerHeight * 0.5 } }), 250)
    setTimeout(() => confettiBurst({ count: 120, origin: { x: window.innerWidth * 0.8, y: window.innerHeight * 0.5 } }), 500)
    showToast('🎉 Konami accepted. Party mode ON — same code turns it off.')
  } else {
    showToast('Party mode off. Back to business.')
  }
}

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

export function initEasterEggs() {
  let pos = 0
  const onKey = (e) => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
    pos = key === KONAMI[pos] ? pos + 1 : key === KONAMI[0] ? 1 : 0
    if (pos === KONAMI.length) {
      pos = 0
      togglePartyMode()
    }
  }
  window.addEventListener('keydown', onKey)

  // For the ones who open the console
  console.log(
    '%cGR',
    'font-size:64px;font-weight:800;color:#38bdf8;text-shadow:0 4px 24px rgba(56,189,248,.5);font-family:sans-serif'
  )
  console.log('%cCurious one, aren’t you?', 'font-size:14px;color:#7dd3fc')
  console.log('%cTry the Konami code on the page: ↑ ↑ ↓ ↓ ← → ← → B A', 'font-size:12px;color:#94a3b8')
  console.log('%cWant to build something together? hello@gannonrutty.com', 'font-size:12px;color:#94a3b8')

  return () => window.removeEventListener('keydown', onKey)
}
