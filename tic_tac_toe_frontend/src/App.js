import React, { useMemo, useState } from 'react';
import './App.css';
import Board from './components/Board';
import StatusBar from './components/StatusBar';
import Controls from './components/Controls';
import { calculateWinner, isDraw, nextPlayer, initialState } from './utils/game';

// PUBLIC_INTERFACE
function App() {
  /** Root app composing header, board, status, and controls. */
  const [state, setState] = useState(initialState());

  const { winner, line } = useMemo(
    () => calculateWinner(state.squares),
    [state.squares]
  );

  const gameOver = winner !== null || isDraw(state.squares);

  // PUBLIC_INTERFACE
  const handleSquareClick = (i) => {
    /** Handles a click on square i. No-op if game over or square filled. */
    if (state.squares[i] || gameOver) return;
    const next = state.squares.slice();
    next[i] = nextPlayer(state.xIsNext);
    setState({
      squares: next,
      xIsNext: !state.xIsNext,
      gameOver: false,
      winningLine: null,
    });
  };

  // PUBLIC_INTERFACE
  const handleReset = () => {
    /** Resets the game board to initial state. */
    setState(initialState());
  };

  const statusText = winner
    ? `Winner: ${winner}`
    : isDraw(state.squares)
      ? 'Draw! No more moves.'
      : `Next: ${nextPlayer(state.xIsNext)}`;

  return (
    <div className="app">
      <main className="shell" aria-label="Tic Tac Toe game">
        <header className="header">
          <h1 className="title">Tic Tac Toe</h1>
          <p className="subtitle">Ocean Professional • Two-player local play</p>
        </header>

        <StatusBar statusText={statusText} />

        <Board
          squares={state.squares}
          onSquareClick={handleSquareClick}
          winningLine={winner ? line : null}
          gameOver={gameOver}
        />

        <Controls onReset={handleReset} disabled={false} />
      </main>
    </div>
  );
}

export default App;
