import React from 'react'
import TicTacToe from './TicTacToe'

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title">Playground</h2>
        <p className="section-kicker">A simple game I coded — give it a try.</p>
        <div className="tictactoe">
          <TicTacToe />
        </div>
      </div>
    </section>
  )
}
