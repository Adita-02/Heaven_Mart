import React, { useState, useEffect } from 'react';

export default function Navbar({ isMobileOpen, onToggleMobile }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const header = document.getElementById('siteHeader');
      const headerMidY = header
        ? header.getBoundingClientRect().top + header.getBoundingClientRect().height / 2
        : 45;

      const isMobile = window.innerWidth <= 768;
      const darkElements = document.querySelectorAll(
        isMobile
          ? '.showroom-section, .timeline-section, .site-footer'
          : '.showroom-section, .timeline-section, .final-cta-section, .site-footer'
      );

      let overDark = false;
      for (let i = 0; i < darkElements.length; i++) {
        const rect = darkElements[i].getBoundingClientRect();
        if (rect.top <= headerMidY && rect.bottom >= headerMidY) {
          overDark = true;
          break;
        }
      }
      setIsOverDark(overDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="header-outer-container">
      <header
        className={`site-header ${isScrolled ? 'scrolled' : ''} ${
          isOverDark ? 'dark-section' : ''
        }`}
        id="siteHeader"
      >
        <a href="#hero" className="brand-logo" aria-label="Heaven Home">
          <div className="brand-crest-icon" title="Heaven">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 4v16M19 4v16M5 12h14" />
            </svg>
          </div>
          <span className="brand-name">
            HE<span className="highlight">A</span>VEN
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary Navigation">
          <a href="#collections">Collections</a>
          <a href="#bespoke">Bespoke</a>
          <a href="#our-story">Our Story</a>
          <a href="#why-heaven">Why Heaven</a>
          <a href="#showroom">Showroom</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className={`mobile-toggle ${isMobileOpen ? 'active' : ''}`}
          id="mobileToggle"
          aria-label={isMobileOpen ? 'Close menu' : 'Open navigation menu'}
          aria-expanded={isMobileOpen}
          onClick={onToggleMobile}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    </div>
  );
}
