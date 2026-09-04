import React from 'react';
import Reveal from './Reveal';

export default function BrandIntro({ onOpenQuote }) {
  return (
    <section className="brand-intro-section" id="our-story">
      <div className="container intro-grid-layout">
        <Reveal delay={1} className="intro-image-block">
          <img
            src="images/approach_bespoke_lounge.png"
            alt="Heaven Furniture Mart curated bespoke living composition"
            className="intro-main-photo"
            loading="lazy"
          />
          <div className="intro-badge-stamp">
            <span className="stamp-title">Heaven Mart</span>
            <span className="stamp-sub">Agrabad Studio · Est. 2020</span>
          </div>
        </Reveal>

        <Reveal delay={2} className="intro-text-column">
          <div className="eyebrow">THE HEAVEN APPROACH</div>
          <h2 className="intro-heading">
            Made for your space.<br />Made for your life.
          </h2>

          <p className="intro-lead-quote">
            “At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.”
          </p>

          <div className="intro-motto-statement">
            Designed. Crafted. Customized.
          </div>

          <div className="intro-feature-pills">
            <div className="intro-pill-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>Founded in 2020</span>
            </div>
            <div className="intro-pill-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Chattogram-based</span>
            </div>
            <div className="intro-pill-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>Bespoke Styling</span>
            </div>
          </div>

          <div>
            <button
              className="btn-olive open-quote-modal"
              aria-label="Start a conversation"
              onClick={() => onOpenQuote()}
            >
              <span>Start a Conversation →</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}