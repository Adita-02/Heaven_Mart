import React, { useState } from 'react';
import Reveal from './Reveal';

const CHIPS = [
  { value: 'Living Room Sofa', label: 'Living Room' },
  { value: 'Master Bedroom Bed', label: 'Master Bed' },
  { value: 'Dining Suite & Chairs', label: 'Dining Suite' },
  { value: 'Accent Chairs & Lounge', label: 'Chairs & Lounge' },
  { value: 'Vanity & Study Suite', label: 'Vanity & Desk' },
  { value: 'Full Home Bespoke', label: 'Full Home Custom' },
];

export default function FinalCTA({ onSubmitSuccess }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('Living Room Sofa');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedNotes = message.trim();

    if (!trimmedName || !trimmedPhone) {
      alert('Please enter your name and phone number.');
      return;
    }

    const waMessage = encodeURIComponent(
      `Hello Heaven Furniture Mart,\n\nI would like to request a bespoke quote / consultation:\n• Name: ${trimmedName}\n• Phone: ${trimmedPhone}\n• Area of Interest: ${selectedRoom}\n${
        trimmedNotes ? `• Details: ${trimmedNotes}\n` : ''
      }\nThank you.`
    );

    setName('');
    setPhone('');
    setMessage('');
    setSelectedRoom('Living Room Sofa');

    if (onSubmitSuccess) {
      onSubmitSuccess(waMessage);
    }
  };

  return (
    <section className="final-cta-section" id="contact">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="final-cta-grid-layout">
          {/* Left Column: Heading, Description & Contact Details */}
          <Reveal delay={1}>
            <div className="eyebrow eyebrow-dark">START YOUR COMMISSION</div>
            <h2 className="final-cta-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
              Let's create something made for you.
            </h2>

            <p className="final-cta-text" style={{ textAlign: 'left', marginLeft: 0, marginRight: 0, marginBottom: '1.75rem' }}>
              “Tell us what you have in mind. We'll help turn your space and ideas into furniture that feels uniquely yours.”
            </p>

            <div className="final-contact-pills" style={{ justifyContent: 'flex-start', marginBottom: '1.5rem' }}>
              <a href="tel:+8801960481983" className="contact-pill-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+880 1960-481983</span>
              </a>
              <a href="mailto:heavenfurnituremart@gmail.com" className="contact-pill-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>heavenfurnituremart@gmail.com</span>
              </a>
            </div>

            <div className="final-reassurance-note" style={{ textAlign: 'left' }}>
              Free design consultation · Bespoke craftsmanship · Delivery & installation
            </div>
          </Reveal>

          {/* Right Column: Direct Embedded Quote Form */}
          <Reveal
            delay={2}
            className="final-cta-form-card"
          >
            <div className="final-form-header">
              <h3 className="final-form-title">
                Request a Custom Quote
              </h3>
              <p className="final-form-subtitle">
                Tell us about your space. We will prepare customized pricing & options.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="final-quote-form">
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="final-form-label form-label" htmlFor="clientName">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="clientName"
                  className="final-form-input form-control"
                  placeholder="e.g. Tanzim Ahmed"
                  required
                  aria-required="true"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="final-form-label form-label" htmlFor="clientPhone">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  id="clientPhone"
                  className="final-form-input form-control"
                  placeholder="+880 1..."
                  required
                  aria-required="true"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="final-form-label form-label">
                  Category of Interest
                </label>
                <div className="chips-selector" role="group" aria-label="Category of Interest" style={{ gap: '6px' }}>
                  {CHIPS.map((chip) => {
                    const isActive = selectedRoom === chip.value;
                    return (
                      <button
                        key={chip.value}
                        type="button"
                        className={`chip-btn final-chip-btn ${isActive ? 'active' : ''}`}
                        aria-pressed={isActive}
                        onClick={() => setSelectedRoom(chip.value)}
                      >
                        {chip.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="final-form-label form-label" htmlFor="clientMessage">
                  Tell Us About Your Space & Dimensions (Optional)
                </label>
                <textarea
                  id="clientMessage"
                  className="final-form-input form-control"
                  rows="2"
                  placeholder="Approx room size, preferred wood tone (Teak/Oak/Walnut), fabric..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-olive btn-cream final-cta-submit-btn"
                style={{ width: '100%', marginTop: '0.35rem' }}
              >
                <span>Send Request via WhatsApp →</span>
              </button>

              <div className="final-form-footer-meta">
                <span>
                  Direct Call: <a href="tel:+8801960481983">+880 1960-481983</a>
                </span>
                <span>Agrabad Showroom</span>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}