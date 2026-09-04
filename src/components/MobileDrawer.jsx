import React, { useEffect } from 'react';

export default function MobileDrawer({ isOpen, onClose, onOpenQuote }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = () => {
    onClose();
  };

  const handleQuoteClick = () => {
    onClose();
    onOpenQuote();
  };

  return (
    <div
      className={`mobile-drawer ${isOpen ? 'open' : ''}`}
      id="mobileDrawer"
      aria-hidden={!isOpen}
    >
      <nav className="mobile-nav-links">
        <a href="#collections" className="mobile-nav-item" onClick={handleLinkClick}>
          <span>Collections</span>
          <span className="num">01</span>
        </a>
        <a href="#bespoke" className="mobile-nav-item" onClick={handleLinkClick}>
          <span>Bespoke</span>
          <span className="num">02</span>
        </a>
        <a href="#our-story" className="mobile-nav-item" onClick={handleLinkClick}>
          <span>Our Story</span>
          <span className="num">03</span>
        </a>
        <a href="#why-heaven" className="mobile-nav-item" onClick={handleLinkClick}>
          <span>Why Heaven</span>
          <span className="num">04</span>
        </a>
        <a href="#showroom" className="mobile-nav-item" onClick={handleLinkClick}>
          <span>Showroom</span>
          <span className="num">05</span>
        </a>
        <a href="#contact" className="mobile-nav-item" onClick={handleLinkClick}>
          <span>Contact</span>
          <span className="num">06</span>
        </a>
      </nav>

      <div style={{ borderTop: '1px solid var(--border-olive)', paddingTop: '1.25rem' }}>
        <button
          className="btn-olive btn-cream open-quote-modal"
          style={{ width: '100%', marginBottom: '1rem' }}
          onClick={handleQuoteClick}
        >
          <span>Request a Quote →</span>
        </button>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-cream-muted)', marginBottom: '0.4rem' }}>
          Agrabad Access Road, Chattogram
        </p>
        <p style={{ fontSize: '0.82rem', color: 'var(--brand-gold)' }}>
          Call: +880 1960-481983
        </p>
      </div>
    </div>
  );
}
