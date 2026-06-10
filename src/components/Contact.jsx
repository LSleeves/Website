import React, { useEffect, useRef, useState } from 'react'
import { useMagnetic } from '../hooks/useScrollAnimation'

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isDesktop, setIsDesktop] = useState(true)
  const cardRef = useRef(null)
  const emailBtn = useMagnetic()
  const linkedinBtn = useMagnetic()

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 1025)
    }

    const handleMouseMove = (e) => {
      if (cardRef.current && isDesktop) {
        const rect = cardRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        setMousePosition({ x: e.clientX - centerX, y: e.clientY - centerY })
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    if (isDesktop) {
      document.addEventListener('mousemove', handleMouseMove)
    }
    return () => {
      window.removeEventListener('resize', checkScreenSize)
      if (isDesktop) {
        document.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [isDesktop])

  const cardStyle = isDesktop
    ? {
        transform: `perspective(1200px) rotateX(${-mousePosition.y * 0.008}deg) rotateY(${mousePosition.x * 0.008}deg) translateZ(16px)`,
        transition: 'transform 0.1s ease-out',
      }
    : {}

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <p className="section-label" style={{ justifyContent: 'center' }} data-reveal>Contact</p>
        <h2 id="contact-title" data-reveal>Let's build something.</h2>
        <p className="lede" data-reveal>
          I'm always open to chatting about projects, products, and ideas —
          see my card below!
        </p>

        <div className="business-card-container" data-reveal>
          <div
            ref={cardRef}
            className="business-card"
            style={cardStyle}
            onClick={() => { window.location.href = 'mailto:hello@gannonrutty.com' }}
            aria-label="Business card — click to email Gannon"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                window.location.href = 'mailto:hello@gannonrutty.com'
              }
            }}
          >
            <img src="/Card.png" alt="Gannon Rutty business card" className="card-image" />
          </div>
        </div>

        <div className="contact-actions" data-reveal>
          <a ref={emailBtn} className="btn primary" href="mailto:hello@gannonrutty.com">
            <span aria-hidden="true">✉️</span>
            <span>hello@gannonrutty.com</span>
          </a>
          <a
            ref={linkedinBtn}
            className="btn"
            href="https://www.linkedin.com/in/gannon-rutty/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">in</span>
            <span>/gannon-rutty ↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
