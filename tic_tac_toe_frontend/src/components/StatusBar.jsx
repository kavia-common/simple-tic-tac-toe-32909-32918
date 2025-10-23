import React from 'react';

/**
 * Displays current status: Next turn, Winner, or Draw
 * Uses aria-live="polite" for assistive technology updates.
 */
// PUBLIC_INTERFACE
export default function StatusBar({ statusText }) {
  /** Renders status pill with live region. */
  return (
    <div className="status-bar">
      <div className="status-pill" aria-live="polite">
        {statusText}
      </div>
    </div>
  );
}
