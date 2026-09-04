import React from 'react';
import Reveal from './Reveal';

export default function Showroom() {
  return (
    <section className="showroom-section" id="showroom">
      <div className="container showroom-grid-layout">
        <Reveal delay={1} className="showroom-photo-frame">
          <img
            src="images/showroom_stone_console.png"
            alt="Heaven Furniture Mart physical showroom atmosphere and stone craft details"
            loading="lazy"
          />
          <div className="showroom-badge-overlay">
            <small>Agrabad Access Road</small>
            <span>Open Daily 10 AM – 9 PM</span>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="eyebrow eyebrow-dark">PHYSICAL PRESENCE & EXPERIENCE</div>
          <h2 className="section-title section-title-dark">See the difference in person.</h2>

          <p className="lead-copy lead-copy-dark">
            “Visit our showroom at Agrabad Access Road, Chattogram and experience our furniture, materials and craftsmanship up close.”
          </p>

          <div className="showroom-address-panel">
            <div className="address-tag">Showroom Studio Location</div>
            <div className="address-text">Agrabad Access Road, Chattogram, Bangladesh</div>
            <div className="address-sub">Convenient parking & dedicated design consultation lounge</div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://maps.google.com/?q=Agrabad+Access+Road,+Chattogram,+Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-olive btn-cream"
              aria-label="Open in Google Maps"
            >
              <span>Open in Google Maps ↗</span>
            </a>
            <a
              href="tel:+8801960481983"
              className="btn-outline-olive"
              style={{ borderColor: 'var(--brand-gold)', color: 'var(--brand-gold)' }}
            >
              <span>Call: +880 1960-481983</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}