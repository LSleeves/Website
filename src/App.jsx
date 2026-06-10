import React, { useEffect, useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useRevealOnScroll } from './hooks/useScrollAnimation'
import { initEasterEggs } from './lib/easterEggs'

function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    const apply = () => {
      raf = 0
      if (ref.current) ref.current.style.transform = `translate(${x}px, ${y}px)`
    }
    const move = (e) => {
      x = e.clientX
      y = e.clientY
      if (!raf) raf = requestAnimationFrame(apply)
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}

export default function App() {
  useRevealOnScroll()

  useEffect(() => initEasterEggs(), [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <CursorGlow />
      <Header />
      <main id="main" className="site-main" tabIndex={-1}>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
