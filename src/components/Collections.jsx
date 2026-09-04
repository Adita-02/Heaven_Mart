import React from 'react';
import CollectionPoster from './CollectionPoster';
import Reveal from './Reveal';

export default function Collections() {
  return (
    <section className="collections-section" id="collections">
      <div className="container">
        <Reveal delay={1} className="collections-header-bar">
          <div>
            <div className="eyebrow">OUR BESPOKE SHOWCASE</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Where Luxury Meets Comfort.
            </h2>
          </div>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-charcoal-muted)', maxWidth: '440px' }}>
            Explore signature handcrafted suites tailored to room dimensions and interior palettes across Chattogram.
          </div>
        </Reveal>

        <Reveal delay={2}>
          <CollectionPoster />
        </Reveal>
      </div>
    </section>
  );
}