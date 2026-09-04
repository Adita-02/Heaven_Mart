import React from 'react';
import Reveal from './Reveal';

export default function Timeline() {
  const milestones = [
    {
      year: '2020',
      desc: 'Founded by Abul Kalam Bhuiyan with a vision for uncompromising custom furniture.',
    },
    {
      year: '2021',
      desc: 'Opened the flagship Agrabad showroom to showcase full custom room concepts.',
    },
    {
      year: '2024–25',
      desc: 'Exhibited signature bespoke suites at the International Furniture Fair, Chattogram.',
    },
    {
      year: '2025',
      desc: 'Became an esteemed member of the Chattogram Chamber of Commerce.',
    },
    {
      year: '2026',
      desc: 'Received nationwide BFIOA recognition for manufacturing quality & bespoke excellence.',
    },
  ];

  return (
    <section className="timeline-section">
      <div className="container">
        <Reveal delay={1} className="timeline-header-block">
          <div className="eyebrow eyebrow-dark" style={{ justifyContent: 'center' }}>
            CHRONICLE OF GROWTH
          </div>
          <h2 className="section-title section-title-dark" style={{ textAlign: 'center' }}>
            From Chattogram, crafted with ambition.
          </h2>
          <p style={{ color: 'var(--text-cream-muted)', fontSize: '0.95rem' }}>
            A journey of bespoke furniture artistry from local studio to recognized industry standard.
          </p>
        </Reveal>

        <div className="timeline-track-grid">
          {milestones.map((m, idx) => (
            <Reveal key={idx} delay={((idx % 3) + 1)} className="timeline-node-item">
              <div className="timeline-dot-pin"></div>
              <div className="timeline-year-text">{m.year}</div>
              <p className="timeline-desc-text">{m.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}