import React, { useEffect, useMemo, useState } from 'react'

const WIN_PATTERNS = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6],
]

function checkWinner(board) {
  for (const [a,b,c] of WIN_PATTERNS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a]
  }
  return board.includes(null) ? null : 'Tie'
}

function minimax(board, depth, isMaximizing, player, ai) {
  const winner = checkWinner(board)
  if (winner === ai) return 10 - depth
  if (winner === player) return depth - 10
  if (winner === 'Tie') return 0

  if (isMaximizing) {
    let maxEval = -Infinity
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        const next = board.slice()
        next[i] = ai
        const score = minimax(next, depth + 1, false, player, ai)
        if (score > maxEval) maxEval = score
      }
    }
    return maxEval
  } else {
    let minEval = Infinity
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        const next = board.slice()
        next[i] = player
        const score = minimax(next, depth + 1, true, player, ai)
        if (score < minEval) minEval = score
      }
    }
    return minEval
  }
}

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isPlayerTurn, setIsPlayerTurn] = useState(true)
  const player = 'X'
  const ai = 'O'

  const winner = useMemo(() => checkWinner(board), [board])

  // Run AI turn whenever it's the computer's move
  useComputerTurn(board, isPlayerTurn, setBoard, setIsPlayerTurn)

  function aiBestMove(currentBoard) {
    let bestScore = -Infinity
    let move
    for (let i = 0; i < currentBoard.length; i++) {
      if (currentBoard[i] === null) {
        const next = currentBoard.slice()
        next[i] = ai
        const score = minimax(next, 0, false, player, ai)
        if (score > bestScore) { bestScore = score; move = i }
      }
    }
    return move
  }

  function onSquareClick(index) {
    if (!isPlayerTurn) return
    if (board[index] || winner) return
    const next = board.slice()
    next[index] = player
    setBoard(next)
    setIsPlayerTurn(false)
  }

  function reset() {
    setBoard(Array(9).fill(null))
    setIsPlayerTurn(true)
  }

  return (
    <div className="ttt-wrapper">
      <h3>Tic Tac Toe</h3>
      <div className="board">
        {board.map((cell, i) => (
          <button
            key={i}
            type="button"
            className="square"
            aria-label={`Square ${i + 1}`}
            disabled={Boolean(cell) || Boolean(winner) || !isPlayerTurn}
            onClick={() => onSquareClick(i)}
          >
            {cell}
          </button>
        ))}
      </div>
      <div className="status">
        {winner ? (winner === 'Tie' ? `It's a tie!` : `Winner: ${winner}`) : (isPlayerTurn ? 'Your move' : 'Computer thinking…')}
      </div>
      <div className="actions">
        <button type="button" className="btn" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

// Trigger AI move when it's the computer's turn, using latest state
export function useComputerTurn(board, isPlayerTurn, setBoard, setIsPlayerTurn) {
  const player = 'X'
  const ai = 'O'
  useEffect(() => {
    if (isPlayerTurn) return
    const win = checkWinner(board)
    if (win) return
    const move = (function getBestMove() {
      let bestScore = -Infinity
      let move
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          const next = board.slice()
          next[i] = ai
          const score = minimax(next, 0, false, player, ai)
          if (score > bestScore) { bestScore = score; move = i }
        }
      }
      return move
    })()
    if (move !== undefined) {
      const nextBoard = board.slice()
      nextBoard[move] = ai
      const delay = 300
      const id = setTimeout(() => {
        setBoard(nextBoard)
        setIsPlayerTurn(true)
      }, delay)
      return () => clearTimeout(id)
    }
  }, [board, isPlayerTurn, setBoard, setIsPlayerTurn])
}


