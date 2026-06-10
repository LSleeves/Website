import React, { useEffect, useRef, useState } from 'react'
import { confettiBurst } from '../lib/confetti'
import { showToast } from '../lib/easterEggs'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'playground', label: 'Playground' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')
  const headerRef = useRef(null)
  const logoRef = useRef(null)
  const logoClicks = useRef(0)

  // Scrolled state + scroll progress bar
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        setIsScrolled(window.scrollY > 24)
        const max = document.documentElement.scrollHeight - window.innerHeight
        const progress = max > 0 ? window.scrollY / max : 0
        headerRef.current?.style.setProperty('--progress', progress)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Highlight the section currently in view
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Easter egg: five clicks on the logo
  const onLogoClick = () => {
    logoClicks.current += 1
    if (logoClicks.current === 5) {
      logoClicks.current = 0
      const logo = logoRef.current
      if (logo) {
        logo.classList.remove('spin')
        void logo.offsetWidth // restart the animation
        logo.classList.add('spin')
      }
      const r = logo?.getBoundingClientRect()
      confettiBurst({ count: 90, origin: r ? { x: r.left + r.width / 2, y: r.bottom } : undefined })
      showToast('🔍 Five clicks? You found one. Persistence pays.')
    }
  }

  return (
    <header ref={headerRef} className={`site-header ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <span className="scroll-progress" aria-hidden="true" />
      <nav className="site-nav" role="navigation" aria-label="Primary">
        <a className="brand" href="#welcome" onClick={onLogoClick}>
          <img ref={logoRef} src="/GR.png" alt="Gannon Rutty" className="brand-logo" />
        </a>
        <ul className="nav-list">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={activeId === id ? 'active' : ''}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
