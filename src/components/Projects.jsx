import React, { Suspense, lazy } from 'react'

const TicTacToe = lazy(() => import('./TicTacToe'))

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title">Playground</h2>
        <p className="section-kicker">A simple game I coded — give it a try.</p>
        <div className="tictactoe">
          <Suspense fallback={<p className="section-kicker">Loading game…</p>}>
            <TicTacToe />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
