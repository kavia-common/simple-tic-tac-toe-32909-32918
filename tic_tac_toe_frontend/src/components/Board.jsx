import React from 'react';
import Square from './Square';

/**
 * 3x3 Board grid. Responsible for rendering 9 squares and wiring onClick.
 */
// PUBLIC_INTERFACE
export default function Board({ squares, onSquareClick, winningLine, gameOver }) {
  /** Renders 3x3 grid with winner highlighting. */
  const renderSquare = (i) => {
    const isWinner = winningLine ? winningLine.includes(i) : false;
    return (
      <Square
        key={i}
        index={i}
        value={squares[i]}
        onClick={() => onSquareClick(i)}
        isWinner={isWinner}
        disabled={Boolean(squares[i]) || gameOver}
      />
    );
  };

  return (
    <div className="board-wrap" role="grid" aria-label="Tic Tac Toe board">
      <div className="grid">
        {Array.from({ length: 9 }, (_, i) => renderSquare(i))}
      </div>
    </div>
  );
}
