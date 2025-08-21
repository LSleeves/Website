import React, { useState, useEffect, useRef } from 'react'

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isDesktop, setIsDesktop] = useState(true)
  const cardRef = useRef(null)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 1025) // 1025px breakpoint
    }

    const handleMouseMove = (e) => {
      if (cardRef.current && isDesktop) {
        const rect = cardRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const x = e.clientX - centerX
        const y = e.clientY - centerY
        
        setMousePosition({ x, y })
      }
    }

    // Check screen size on mount and resize
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    // Add mouse move listener only on desktop
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

  const cardStyle = isDesktop ? {
    transform: `perspective(1000px) rotateX(${-mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg) translateZ(20px)`,
    transition: 'transform 0.1s ease-out'
  } : {}

  const handleCardClick = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const clickY = e.clientY - rect.top
    const cardHeight = rect.height
    
    // Top half for email, bottom half for LinkedIn
    if (clickY < cardHeight / 2) {
      window.location.href = 'mailto:hello@gannonrutty.com'
    } else {
      window.open('https://www.linkedin.com/in/gannon-rutty/', '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title">Get in touch</h2>
        <p className="lede">I'm always open to chatting about projects and ideas.</p>
        
        <div className="business-card-container">
          <div 
            ref={cardRef}
            className="business-card"
            style={cardStyle}
            onClick={handleCardClick}
            aria-label="Business card - click top half for email, bottom half for LinkedIn"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                // Default to email on keyboard interaction
                window.location.href = 'mailto:hello@gannonrutty.com'
              }
            }}
          >
            <img 
              src="/Card.png" 
              alt="Gannon Rutty Business Card" 
              className="card-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
