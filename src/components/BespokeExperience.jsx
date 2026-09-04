import React from 'react';
import Reveal from './Reveal';

export default function BespokeExperience({ onOpenQuote }) {
  return (
    <section className="bespoke-editorial-section" id="bespoke">
      <div className="container">
        {/* Top Editorial Header */}
        <Reveal
          delay={1}
          className="archive-header-block"
          style={{
            paddingBottom: '1.25rem',
            borderBottom: '1px solid rgba(74, 80, 64, 0.25)',
            marginBottom: '2rem',
          }}
        >
          <div className="eyebrow" style={{ marginBottom: '0.85rem', color: 'var(--walnut-brown)' }}>
            02 / BESPOKE
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: '-0.015em',
              color: 'var(--deep-olive-dark)',
              marginBottom: '1.25rem',
            }}
          >
            Made for your space.<br />
            <em style={{ fontStyle: 'italic', color: '#B88D48', fontWeight: 400 }}>
              Designed around you.
            </em>
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: 'var(--text-charcoal-muted)',
              maxWidth: '720px',
              fontWeight: 400,
              marginBottom: '0.85rem',
            }}
          >
            Every space is different. We create custom furniture around your dimensions, style and everyday needs — from the overall form to the materials, finish and details.
          </p>
          <p
            style={{
              fontSize: '0.92rem',
              lineHeight: 1.6,
              color: 'var(--walnut-brown)',
              maxWidth: '720px',
              fontWeight: 500,
              margin: 0,
            }}
          >
            Your idea, your space, your furniture — thoughtfully designed and crafted to fit.
          </p>
        </Reveal>

        {/* Asymmetric Staggered (Upor-Nich) 2-Column Gallery Grid */}
        <div className="archive-asymmetric-grid">
          {/* Left Column */}
          <div className="archive-column-left">
            {/* Piece 01 (Living Sectional Suite) */}
            <Reveal delay={1} className="editorial-card-item">
              <div
                className="editorial-card-photo-wrap"
                style={{
                  aspectRatio: '1 / 1',
                  background: 'var(--bg-cream-card)',
                  border: '1px solid rgba(184, 173, 158, 0.45)',
                }}
              >
                <img
                  src="images/bespoke_living_sectional.jpg"
                  alt="Custom tailored living sectional sofa with warm earthy tones and solid walnut coffee table"
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'saturate(0.96) contrast(0.98)',
                  }}
                />
              </div>
              <div className="editorial-card-top">
                <div>
                  <h3 className="editorial-card-title" style={{ marginBottom: '2px' }}>
                    Living Sectional Suite
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--walnut-brown)',
                      fontWeight: 700,
                      display: 'block',
                    }}
                  >
                    CUSTOM LINEN & SOLID WALNUT
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Piece 03 (Royal Master Bed Suite) */}
            <Reveal delay={2} className="editorial-card-item">
              <div
                className="editorial-card-photo-wrap"
                style={{
                  aspectRatio: '1 / 1',
                  background: 'var(--bg-cream-card)',
                  border: '1px solid rgba(184, 173, 158, 0.45)',
                }}
              >
                <img
                  src="images/bespoke_master_bed.jpg"
                  alt="Custom classic master bed suite with carved gilded trim, bench and bedside tables"
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'saturate(0.96) contrast(0.98)',
                  }}
                />
              </div>
              <div className="editorial-card-top">
                <div>
                  <h3 className="editorial-card-title" style={{ marginBottom: '2px' }}>
                    Royal Master Bed Suite
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--walnut-brown)',
                      fontWeight: 700,
                      display: 'block',
                    }}
                  >
                    CARVED GOLD ACCENTS & TUFTED FABRIC
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Editorial Manifesto & Direct Conversation Action */}
            <Reveal delay={3} className="archive-manifesto-block">
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.45rem',
                    color: 'var(--deep-olive-dark)',
                    lineHeight: 1.3,
                    marginBottom: '0.35rem',
                    fontWeight: 500,
                  }}
                >
                  Have something specific in mind?
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    color: 'var(--text-charcoal-muted)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Let's design it together.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="btn-olive open-quote-modal"
                  data-category="Full Home Bespoke"
                  style={{ marginTop: '0.5rem' }}
                  onClick={() => onOpenQuote('Full Home Bespoke')}
                >
                  <span>Request a Quote →</span>
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Column (Staggered Downward Upor-Nich) */}
          <div className="archive-column-right">
            {/* Piece 02 (Round Dining Suite) */}
            <Reveal delay={2} className="editorial-card-item">
              <div
                className="editorial-card-photo-wrap"
                style={{
                  aspectRatio: '1 / 1',
                  background: 'var(--bg-cream-card)',
                  border: '1px solid rgba(184, 173, 158, 0.45)',
                }}
              >
                <img
                  src="images/bespoke_dining_round.jpg"
                  alt="Bespoke round polished walnut dining table with curved upholstered dining chairs"
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'saturate(0.96) contrast(0.98)',
                  }}
                />
              </div>
              <div className="editorial-card-top">
                <div>
                  <h3 className="editorial-card-title" style={{ marginBottom: '2px' }}>
                    Round Dining Suite
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--walnut-brown)',
                      fontWeight: 700,
                      display: 'block',
                    }}
                  >
                    POLISHED WALNUT & UPHOLSTERED CHAIRS
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Piece 04 (Carved Dresser & Mirror Suite) */}
            <Reveal delay={3} className="editorial-card-item">
              <div
                className="editorial-card-photo-wrap"
                style={{
                  aspectRatio: '1 / 1',
                  background: 'var(--bg-cream-card)',
                  border: '1px solid rgba(184, 173, 158, 0.45)',
                }}
              >
                <img
                  src="images/bespoke_dresser_mirror.jpg"
                  alt="Handcrafted classic wooden chest of drawers with ornamental gold carved mirror frame"
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'saturate(0.96) contrast(0.98)',
                  }}
                />
              </div>
              <div className="editorial-card-top">
                <div>
                  <h3 className="editorial-card-title" style={{ marginBottom: '2px' }}>
                    Carved Dresser & Mirror Suite
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--walnut-brown)',
                      fontWeight: 700,
                      display: 'block',
                    }}
                  >
                    ORNATE GILDED FRAME & SOLID WOOD
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}