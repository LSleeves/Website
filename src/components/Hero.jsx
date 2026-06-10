import React, { useEffect, useState } from 'react'
import { useMagnetic } from '../hooks/useScrollAnimation'

const NAME = 'Gannon Rutty'

// Edit these to change the rotating descriptor words in the hero.
const WORDS = ['products', 'websites', 'a homelab', 'game nights', 'ideas that ship']

function greeting() {
  const h = new Date().getHours()
  if (h < 5) return 'Up late? Same.'
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const ctaPrimary = useMagnetic()
  const ctaSecondary = useMagnetic()

  // Rotate the descriptor word (motion-safe)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setWordIndex((i) => (i + 1) % WORDS.length), 2400)
    return () => clearInterval(id)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="welcome" className="hero" aria-labelledby="hero-title">
      <div className="container">
        <p className="hero-kicker">{greeting()} 🌊</p>

        <h1 id="hero-title" className="headline" aria-label={NAME}>
          {NAME.split('').map((ch, i) => (
            <span key={i} className="h-letter" style={{ '--i': i }} aria-hidden="true">
              <span className="h-inner">{ch}</span>
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
        dive in
        <span className="chevron" aria-hidden="true" />
      </button>
    </section>
  )
}
