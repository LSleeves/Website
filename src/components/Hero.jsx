import React, { useEffect, useRef, useState } from 'react'
import { useMagnetic } from '../hooks/useScrollAnimation'

const NAME = 'Gannon Rutty'
const WORDS = ['products', 'websites', 'a homelab', 'game nights', 'ideas that ship']

function greeting() {
  const h = new Date().getHours()
  if (h < 5) return 'Up late? Same.'
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

export default function Hero() {
  const sectionRef = useRef(null)
  const [wordIndex, setWordIndex] = useState(0)
  const ctaPrimary = useMagnetic()
  const ctaSecondary = useMagnetic()

  // Rotate the descriptor word (motion-safe)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setWordIndex((i) => (i + 1) % WORDS.length), 2400)
    return () => clearInterval(id)
  }, [])

  // Mouse parallax for the aurora orbs
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const move = (e) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5) * 2)
      el.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5) * 2)
    }
    el.addEventListener('mousemove', move, { passive: true })
    return () => el.removeEventListener('mousemove', move)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="welcome" ref={sectionRef} className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <div className="orb-wrap"><div className="orb" /></div>
        <div className="orb-wrap"><div className="orb" /></div>
        <div className="orb-wrap"><div className="orb" /></div>
        <div className="hero-grid" />
      </div>

      <div className="container">
        <p className="hero-kicker">
          <span className="pulse-dot" aria-hidden="true" />
          {greeting()} — open to projects &amp; conversations
        </p>

        <h1 id="hero-title" className="headline" aria-label={NAME}>
          {NAME.split('').map((ch, i) => (
            <span key={i} className="h-letter" style={{ '--i': i }} aria-hidden="true">
              {ch}
            </span>
          ))}
        </h1>

        <p className="hero-rotator">
          Entrepreneur &amp; builder. I make{' '}
          <span key={WORDS[wordIndex]} className="rotator-word">{WORDS[wordIndex]}</span>
        </p>

        <div className="cta-row">
          <a ref={ctaPrimary} className="btn primary" href="#about">Who I am ↓</a>
          <a ref={ctaSecondary} className="btn" href="#contact">Get in touch</a>
        </div>
      </div>

      <button type="button" className="scroll-cue" onClick={scrollToAbout} aria-label="Scroll to about section">
        scroll
        <span className="chevron" aria-hidden="true" />
      </button>
    </section>
  )
}
