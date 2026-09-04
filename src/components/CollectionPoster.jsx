import React, { useState, useEffect } from 'react';
import { collectionItems } from '../data/collections';

export default function CollectionPoster() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  const total = collectionItems.length;

  const handlePrev = (e) => {
    if (e) e.preventDefault();
    changeIndex((currentIndex - 1 + total) % total);
  };

  const handleNext = (e) => {
    if (e) e.preventDefault();
    changeIndex((currentIndex + 1) % total);
  };

  const changeIndex = (newIdx) => {
    if (newIdx === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(newIdx);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setDisplayedIndex(currentIndex);
        setIsAnimating(false);
      }, 160);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isAnimating]);

  const item = collectionItems[displayedIndex];

  return (
    <div
      className="livora-showcase-poster"
      id="livoraShowcase"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Poster Nav Row */}
      <div className="poster-top-meta-row">
        <div className="poster-creator-tag">
          Heaven Furniture Mart<br />
          <small>Bespoke Studio · Agrabad Access Road</small>
        </div>

        {/* Arrow Navigation Controls (< and >) */}
        <div className="poster-arrow-controls">
          <button
            type="button"
            className="poster-nav-btn"
            id="btnPrevCollection"
            aria-label="Previous collection piece"
            onClick={handlePrev}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <span className="poster-counter-pill" id="posterCounterPill">
            0{currentIndex + 1} / 0{total}
          </span>
          <button
            type="button"
            className="poster-nav-btn"
            id="btnNextCollection"
            aria-label="Next collection piece"
            onClick={handleNext}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <span className="poster-monogram-badge" title="Heaven Furniture Mart">
            H
          </span>
        </div>
      </div>

      <div className="poster-top-divider"></div>

      {/* Central Stage with Watermark */}
      <div className="poster-stage-container">
        <button
          type="button"
          className="stage-side-arrow-btn stage-arrow-prev"
          id="stageArrowPrev"
          aria-label="Previous piece"
          onClick={handlePrev}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          className="stage-side-arrow-btn stage-arrow-next"
          id="stageArrowNext"
          aria-label="Next piece"
          onClick={handleNext}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div
          className="poster-heaven-logo-watermark"
          id="posterWatermark"
          style={{ opacity: isAnimating ? '0' : '0.14' }}
        >
          <div className="watermark-heaven-title">
            HE<span className="styled-a">A</span>VEN
          </div>
          <div className="watermark-sub-mart">FURNITURE MART</div>
        </div>

        <img
          src={item.imgSrc}
          alt={`${item.title} by Heaven Furniture Mart`}
          className="poster-hero-furniture-img"
          id="posterMainImg"
          style={{
            cursor: 'pointer',
            opacity: isAnimating ? '0' : '1',
            transform: isAnimating ? 'scale(0.96) translateY(4px)' : 'scale(1) translateY(0)',
          }}
          title="Click to request a bespoke quote"
          onClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>

      {/* Bottom Editorial Details Block */}
      <div className="poster-editorial-footer-grid">
        <div>
          <div className="eyebrow" id="posterItemCategory" style={{ marginBottom: '0.25rem' }}>
            {item.category}
          </div>
          <h3 className="poster-piece-title" id="posterPieceTitle">
            {item.title}
          </h3>
          <p className="poster-piece-description" id="posterPieceDesc">
            {item.desc}
          </p>

          <div className="poster-feature-list" id="posterFeatures">
            {item.features.map((f, i) => (
              <div key={i} className="poster-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="poster-action-group">
          <span className="poster-script-signature">Heaven & Space</span>
        </div>
      </div>

      <div className="poster-bottom-coords">
        <span>heavenfurnituremart.com · Agrabad Access Road, Chattogram</span>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.88rem', fontWeight: 600 }}>
          Edition 2026
        </span>
      </div>
    </div>
  );
}