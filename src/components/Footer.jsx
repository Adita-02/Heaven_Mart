import React from 'react';
import Reveal from './Reveal';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <Reveal delay={1} className="footer-simple-grid">
          {/* Left: Brand Info */}
          <div>
            <span className="footer-brand-heading">Heaven Furniture Mart</span>
            <span className="footer-brand-tag">Designed. Crafted. Customized.</span>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--text-cream-muted)', maxWidth: '440px' }}>
              Creating bespoke solid wood furniture and tailored living atmospheres in Chattogram since 2020.
            </p>
          </div>

          {/* Right: Showroom & Contact Info */}
          <div>
            <div
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--brand-gold)',
                marginBottom: '0.75rem',
                fontWeight: 700,
              }}
            >
              Showroom & Studio
            </div>
            <div className="footer-contact-details">
              <p>Agrabad Access Road, Chattogram, Bangladesh</p>
              <p style={{ marginTop: '4px' }}>
                Phone: <a href="tel:+8801960481983">+880 1960-481983</a> ·{' '}
                Email: <a href="mailto:heavenfurnituremart@gmail.com">heavenfurnituremart@gmail.com</a>
              </p>
            </div>

            <div className="footer-socials-group">
              <a
                href="https://facebook.com/HeavenFurnitureMart"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-circle"
                aria-label="Facebook"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/heaven_furniture_ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-circle"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@HeavenFurnitureMart"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-circle"
                aria-label="YouTube"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#09100e" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>

        <div className="footer-bottom-bar">
          <div>© 2026 Heaven Furniture Mart. All rights reserved.</div>
          <div>Agrabad Access Road, Chattogram, Bangladesh</div>
        </div>
      </div>
    </footer>
  );
}