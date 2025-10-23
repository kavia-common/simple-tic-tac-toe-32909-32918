//
// Game utility helpers for Tic Tac Toe
//

// PUBLIC_INTERFACE
export function calculateWinner(squares) {
  /** Determine winning line and winner symbol from 3x3 squares array (length 9).
   * Returns: { winner: 'X'|'O'|null, line: number[]|null }
   */
  const lines = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // cols
    [0,4,8], [2,4,6],          // diagonals
  ];
  for (const [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a,b,c] };
    }
  }
  return { winner: null, line: null };
}

// PUBLIC_INTERFACE
export function isDraw(squares) {
  /** Returns true if all squares filled and no winner. */
  const { winner } = calculateWinner(squares);
  return !winner && squares.every(Boolean);
}

// PUBLIC_INTERFACE
export function nextPlayer(xIsNext) {
  /** Returns symbol for next player based on xIsNext boolean. */
  return xIsNext ? 'X' : 'O';
}

// PUBLIC_INTERFACE
export function initialState() {
  /** Returns initial game state object. */
  return {
    squares: Array(9).fill(null),
    xIsNext: true,
    gameOver: false,
    winningLine: null,
  };
}
