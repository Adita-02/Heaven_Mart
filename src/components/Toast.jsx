import React from 'react';

export default function Toast({ show }) {
  return (
    <div className={`quote-toast ${show ? 'show' : ''}`} id="quoteToast">
      ✓ Request sent! Opening WhatsApp to start direct consultation with our designer...
    </div>
  );
}
