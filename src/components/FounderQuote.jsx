import React from 'react';
import Reveal from './Reveal';

export default function FounderQuote() {
  return (
    <section className="founder-quote-section" style={{ padding: 'clamp(3.5rem, 5vw, 5rem) 0' }}>
      <div className="container">
        <Reveal delay={1} style={{ maxWidth: '800px', textAlign: 'left' }}>
          <div className="eyebrow" style={{ marginBottom: '0.4rem' }}>
            FOUNDER'S NOTE
          </div>
          <h2
            className="section-title"
            style={{
              textAlign: 'left',
              marginBottom: '0.35rem',
            }}
          >
            Crafted for Better Living
          </h2>
          <p
            style={{
              fontSize: '0.92rem',
              color: 'var(--text-charcoal-muted)',
              marginBottom: '2rem',
              lineHeight: 1.6,
            }}
          >
            Trusted by hundreds of happy homeowners in Chattogram and beyond.
          </p>

          <div
            style={{
              borderLeft: '3px solid var(--border-taupe)',
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <blockquote
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.2rem, 2vw, 1.55rem)',
                lineHeight: 1.5,
                color: 'var(--text-charcoal)',
                fontStyle: 'italic',
                fontWeight: 400,
                margin: 0,
              }}
            >
              “Furniture is more than just function; it is a reflection of lifestyle, taste, and comfort.”
            </blockquote>

            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: 'var(--deep-olive-dark)',
              }}
            >
              — Abul Kalam Bhuiyan, Managing Director
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}