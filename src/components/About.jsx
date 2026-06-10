import React, { useState } from 'react'
import { useCountUp } from '../hooks/useScrollAnimation'

// One of these shows at random on every page load.
const FUN_FACTS = [
  'I can probably turn your Excel sheet into a proper web app.',
  'If you’re paying for a simple app, I can probably build you a better one.',
  'I will drop almost anything for a pickleball game.',
  'Some people deploy code. In Cayman, I also deploy fishing lines.',
  'Reload this page — this fact changes.',
]

function spotlight(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

function FunFact() {
  const [fact] = useState(() => FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)])
  return <p>{fact}</p>
}

function Stat({ value, suffix, label }) {
  const ref = useCountUp(value)
  return (
    <div className="stat">
      <div className="stat-num">
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <p className="section-label" data-reveal>About</p>
        <h2 id="about-title" data-reveal>
          I dive into ideas and surface with products.
        </h2>

        <div className="bento">
          <article className="bento-card b-span-2r bento-lead" onMouseMove={spotlight} data-reveal>
            <h3><span className="emoji" aria-hidden="true">👋</span> Hey, I'm Gannon</h3>
            <p>
              Entrepreneur and builder. I like the whole stack of making things —
              the <span className="accent">product</span>, the <span className="accent">code</span>,
              and the <span className="accent">infrastructure</span> underneath it.
            </p>
            <p>
              Away from the screen you'll find me on a{' '}
              <span className="accent">pickleball</span> court, out{' '}
              <span className="accent">fishing</span> in Cayman, or flying
              around the water on a <span className="accent">Sea-Doo</span>.
            </p>
            <img className="bento-watermark" src="/GR.png" alt="" aria-hidden="true" />
          </article>

          <article className="bento-card b-span-2" onMouseMove={spotlight} data-reveal style={{ '--reveal-delay': '0.08s' }}>
            <h3><span className="emoji" aria-hidden="true">🎲</span> Fun fact</h3>
            <FunFact />
          </article>

          <article className="bento-card" onMouseMove={spotlight} data-reveal style={{ '--reveal-delay': '0.16s' }}>
            <h3><span className="emoji" aria-hidden="true">🎮</span> Currently</h3>
            <p>
              Working on a mobile game — more details to come.
              Always: pickleball.
            </p>
          </article>

          <article className="bento-card" onMouseMove={spotlight} data-reveal style={{ '--reveal-delay': '0.24s' }}>
            <div className="stats-row">
              <Stat value={7} suffix="+" label="Live sites" />
              <Stat value={15} suffix="+" label="Containers" />
            </div>
            <p style={{ marginTop: 'var(--space-4)', textAlign: 'center', fontSize: 'var(--text-sm)' }}>
              monitored 24/7, backed up nightly
            </p>
          </article>

          <article className="bento-card b-span-2" onMouseMove={spotlight} data-reveal style={{ '--reveal-delay': '0.3s' }}>
            <h3><span className="emoji" aria-hidden="true">🛠️</span> Recent builds</h3>
            <ul className="build-list">
              <li>
                <span className="what">Frank Sound Pickleball Club site</span>
                <span className="who">community club site</span>
              </li>
              <li>
                <span className="what">Family of family sites</span>
                <span className="who">built for the people I love</span>
              </li>
              <li>
                <span className="what">Home dashboard</span>
                <span className="who">mission control for everything I run</span>
              </li>
            </ul>
          </article>

          <a className="bento-card b-span-2 bento-cta" href="#contact" onMouseMove={spotlight} data-reveal style={{ '--reveal-delay': '0.36s' }}>
            <h3><span className="emoji" aria-hidden="true">💡</span> Have an idea?</h3>
            <p>
              The best projects start as a conversation.{' '}
              <span className="cta-arrow" aria-hidden="true">Let's talk →</span>
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}
