import React, { Suspense, lazy } from 'react'

const TicTacToe = lazy(() => import('./TicTacToe'))

export default function Projects() {
  return (
    <section id="playground" className="section" aria-labelledby="playground-title">
      <div className="container">
        <p className="section-label" data-reveal>
          <span className="index">02</span> Playground
        </p>
        <h2 id="playground-title" data-reveal>Beat my bot. <span style={{ color: 'var(--color-text-faint)' }}>(You won't.)</span></h2>
        <p className="section-kicker" data-reveal>
          A little game I coded — it plays a perfect minimax strategy.
          A draw is the best anyone has ever done.
        </p>
        <div className="tictactoe" data-reveal>
          <Suspense fallback={<p className="section-kicker">Loading game…</p>}>
            <TicTacToe />
          </Suspense>
        </div>
        <p className="playground-note" data-reveal>
          psst — there's more hidden on this page than a game.
        </p>
      </div>
    </section>
  )
}
