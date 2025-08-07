import React, { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <nav id="navbar" className="site-nav" role="navigation" aria-label="Primary">
        <a className="brand" href="#welcome">
          <img src="/GR.png" alt="Gannon Rutty" className="brand-logo" />
        </a>
        <ul className="nav-list">
          <li><a href="#welcome">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
