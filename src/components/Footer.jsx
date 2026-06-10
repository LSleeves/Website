import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      <p>© {year} Gannon Rutty. All rights reserved.</p>
      <p className="footer-sub">Designed &amp; built by hand · served from a PC in my house</p>
      <p className="footer-hint" title="It does something.">↑ ↑ ↓ ↓ ← → ← → B A</p>
    </footer>
  )
}
