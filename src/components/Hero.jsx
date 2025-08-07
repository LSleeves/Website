import React from 'react'

export default function Hero() {
  return (
    <section id="welcome" className="section hero" aria-labelledby="hero-title">
      <div className="container">
        <h1 id="hero-title" className="headline">Hi, I'm Gannon Rutty</h1>
        <p className="subhead">Entrepreneur and builder exploring products, code, and ideas.</p>
        <div className="cta-row">
          <a className="btn primary" href="#projects">See projects</a>
          <a className="btn" href="#contact">Get in touch</a>
        </div>
      </div>
    </section>
  )
}
