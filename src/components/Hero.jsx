import React from 'react';

export default function Hero({ onOpenQuote }) {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-layout-grid">
        <div className="hero-text-block">
          <div className="eyebrow">BESPOKE FURNITURE · CHITTAGONG</div>
          <h1 className="hero-title">
            Furniture, Crafted <em>Around You.</em>
          </h1>
          <p className="hero-sub-copy">
            Premium bespoke furniture designed, crafted and customized around your space, taste and lifestyle.
          </p>

          <div className="hero-actions-row">
            <a href="#collections" className="btn-olive">
              <span>Explore The Collections</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="hero-micro-reassurance">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span>Free design consultation · Delivery & installation included in Chattogram</span>
          </div>
        </div>

        {/* Hero Aside Frame */}
        <div className="hero-visual-frame">
          <div className="hero-photo-wrap">
            <img
              src="images/hero_earthy_lounge.jpg"
              alt="Warm terracotta bouclé armchair and minimal bronze table in organic studio space"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <p className="hero-quote-caption">
            “Tailor-made dimensions, seasoned solid hardwoods, and upholstery selected for your space.”
          </p>
          <div className="hero-frame-meta">
            <span>Studio: <strong>Agrabad, Chattogram</strong></span>
            <span>Craft: <strong>Since 2020</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}