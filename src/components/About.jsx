import React from 'react'
import { useCountUp } from '../hooks/useScrollAnimation'

function spotlight(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
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
        <p className="section-label" data-reveal>
          <span className="index">01</span> About
        </p>
        <h2 id="about-title" data-reveal>
          I take ideas from <em>“what&nbsp;if”</em> to shipped.
        </h2>

        <div className="bento">
          <article className="bento-card b-span-2r bento-lead" onMouseMove={spotlight} data-reveal>
            <h3><span className="emoji" aria-hidden="true">👋</span> Hey, I'm Gannon</h3>
            <p>
              Entrepreneur and builder. I like the whole stack of making things —
              the <span className="accent">product</span>, the <span className="accent">code</span>,
              and the <span className="accent">infrastructure</span> underneath it.
              Most of what I run lives on hardware I can physically kick.
            </p>
            <div className="chip-row">
              <span className="chip">React</span>
              <span className="chip">Node</span>
              <span className="chip">Next.js</span>
              <span className="chip">Postgres</span>
              <span className="chip">Docker</span>
              <span className="chip">Cloudflare</span>
            </div>
            <img className="bento-watermark" src="/GR.png" alt="" aria-hidden="true" />
          </article>

          <article className="bento-card b-span-2" onMouseMove={spotlight} data-reveal style={{ '--reveal-delay': '0.08s' }}>
            <h3><span className="emoji" aria-hidden="true">📡</span> Fun fact</h3>
            <p>
              This page was served to you from a PC sitting in my house — Docker
              container, Cloudflare tunnel, zero cloud bills. If it loads, my desk is online.
            </p>
          </article>

          <article className="bento-card" onMouseMove={spotlight} data-reveal style={{ '--reveal-delay': '0.16s' }}>
            <h3><span className="emoji" aria-hidden="true">🧪</span> Currently</h3>
            <p>
              AI-assisted building, self-hosting everything, and a World Cup ’26
              bracket pool for friends. Always: pickleball.
            </p>
          </article>

          <article className="bento-card" onMouseMove={spotlight} data-reveal style={{ '--reveal-delay': '0.24s' }}>
            <div className="stats-row">
              <Stat value={10} suffix="+" label="Live sites" />
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
                <span className="what">franksoundpickleball.club</span>
                <span className="who">community club site</span>
              </li>
              <li>
                <span className="what">World Cup ’26 bracket pool</span>
                <span className="who">for friends</span>
              </li>
              <li>
                <span className="what">Family of family sites</span>
                <span className="who">built for the people I love</span>
              </li>
              <li>
                <span className="what">Home dashboard + Minecraft server</span>
                <span className="who">mission control & game nights</span>
              </li>
            </ul>
          </article>

          <a className="bento-card b-span-2 bento-cta" href="#contact" onMouseMove={spotlight} data-reveal style={{ '--reveal-delay': '0.36s' }}>
            <h3><span className="emoji" aria-hidden="true">💡</span> Have an idea?</h3>
            <p>
              The best projects start as a conversation.
              <span className="cta-arrow" aria-hidden="true"> Let's talk →</span>
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}
