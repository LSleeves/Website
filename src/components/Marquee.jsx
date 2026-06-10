import React from 'react'

const ITEMS = [
  'Builder',
  'Entrepreneur',
  'Self-hoster',
  'Shipping beats talking',
  'Pickleball enjoyer',
  'Ideas → products',
]

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
