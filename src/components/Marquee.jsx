import React from 'react'

const ITEMS = [
  'Builder',
  'Entrepreneur',
  'Pickleball',
  'Fishing',
  'Sea-Doos',
  'Self-hoster',
  'Shipping beats talking',
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
