import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title">Get in touch</h2>
        <p className="lede">I'm always open to chatting about projects and ideas.</p>
        <div className="contact-links" role="list">
          <a 
            role="listitem" 
            className="contact-link" 
            href="https://www.linkedin.com/in/gannon-rutty/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn profile"
          >
            <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          <a 
            role="listitem" 
            className="contact-link" 
            href="mailto:hello@gannonrutty.com" 
            aria-label="Send email to hello at gannonrutty dot com"
          >
            <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
            </svg>
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}
