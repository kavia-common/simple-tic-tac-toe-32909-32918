import React from 'react';

/**
 * Single board square. Displays a mark and handles clicks.
 * Accessible: role="button", aria-label for placement, disabled state reflected by aria-disabled.
 */
// PUBLIC_INTERFACE
export default function Square({ value, onClick, disabled, isWinner, index }) {
  /** Renders a single square. */
  const label = value
    ? `Cell ${index + 1}, ${value}`
    : `Place ${index + 1}`;

  return (
    <button
      type="button"
      className={`square${disabled ? ' disabled' : ''}${isWinner ? ' winner' : ''}`}
      onClick={onClick}
      aria-label={label}
      aria-disabled={disabled}
      disabled={disabled}
    >
      <span className={`mark ${value === 'X' ? 'x' : value === 'O' ? 'o' : ''}`} aria-hidden="true">
        {value || ''}
      </span>
    </button>
  );
}
