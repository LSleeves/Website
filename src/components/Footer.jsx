import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="site-footer" role="contentinfo">
      <p>© <span>{year}</span> Gannon Rutty. All rights reserved.</p>
    </footer>
  )
}
