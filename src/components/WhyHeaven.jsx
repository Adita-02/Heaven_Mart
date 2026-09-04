import React from 'react';
import Reveal from './Reveal';

export default function WhyHeaven() {
  const points = [
    { num: '01', title: 'Fully Bespoke' },
    { num: '02', title: 'Premium Materials' },
    { num: '03', title: 'Expert Craftsmanship' },
    { num: '04', title: 'Free Design Consultation' },
    { num: '05', title: 'Delivery & Installation' },
    { num: '06', title: 'Chattogram Showroom' },
  ];

  return (
    <section className="why-heaven-section" id="why-heaven">
      <div className="container">
        <Reveal delay={1} className="why-editorial-header">
          <div>
            <div className="eyebrow">THE HEAVEN DISTINCTION</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Why Heaven
            </h2>
          </div>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-charcoal-muted)', maxWidth: '420px' }}>
            Built on craftsmanship, transparency, and a dedication to bespoke living in Chattogram.
          </div>
        </Reveal>

        <div
          className="editorial-divider"
          style={{
            width: '100%',
            height: '1px',
            background: 'var(--border-taupe)',
            marginTop: '1.5rem',
            marginBottom: '0.25rem',
          }}
        ></div>

        {/* LINE BY LINE EDITORIAL LIST */}
        <div className="why-line-list" style={{ display: 'flex', flexDirection: 'column' }}>
          {points.map((pt, idx) => (
            <Reveal
              key={idx}
              delay={((idx % 3) + 1)}
              className="why-line-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.95rem 0.25rem',
                borderBottom: '1px solid var(--border-taupe)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1.25rem, 3vw, 2.5rem)' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    color: 'var(--text-charcoal-muted)',
                  }}
                >
                  {pt.num}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                    fontWeight: 400,
                    color: 'var(--text-charcoal)',
                    margin: 0,
                    letterSpacing: '0',
                  }}
                >
                  {pt.title}
                </h3>
              </div>
              <span
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--walnut-brown)',
                  opacity: 0.7,
                }}
              >
                ↗
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}