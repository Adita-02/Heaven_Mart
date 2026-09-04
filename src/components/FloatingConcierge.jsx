import React from 'react';

export default function FloatingConcierge({ onOpenQuote }) {
  return (
    <button
      className="floating-concierge open-quote-modal"
      aria-label="Request a bespoke quote consultation"
      title="Request a Custom Quote"
      onClick={() => onOpenQuote()}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      <span>Request a Quote</span>
    </button>
  );
}
