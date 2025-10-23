import React from 'react';

/**
 * Controls section for game actions (Reset).
 */
// PUBLIC_INTERFACE
export default function Controls({ onReset, disabled }) {
  /** Renders Reset button. */
  return (
    <div className="status-bar" style={{ marginTop: 0 }}>
      <button
        type="button"
        className="btn"
        onClick={onReset}
        aria-label="Reset game"
        disabled={false}
      >
        Reset
      </button>
    </div>
  );
}
