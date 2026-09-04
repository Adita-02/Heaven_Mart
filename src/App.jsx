import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileDrawer from './components/MobileDrawer';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import Collections from './components/Collections';
import BespokeExperience from './components/BespokeExperience';
import WhyHeaven from './components/WhyHeaven';
import Showroom from './components/Showroom';
import FounderQuote from './components/FounderQuote';
import Timeline from './components/Timeline';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingConcierge from './components/FloatingConcierge';
import Toast from './components/Toast';

export default function App() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Helper for dynamic fixed header offset
  const getHeaderOffset = () => (window.innerWidth <= 768 ? 80 : 100);

  // Smooth Section Jump Motion on Anchor Click and Nav
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const targetId = link.getAttribute('href');
      if (targetId === '#' || !targetId.startsWith('#')) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = getHeaderOffset();
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    };

    document.addEventListener('click', handleAnchorClick, { passive: false });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const handleScrollToQuote = () => {
    const el = document.getElementById('contact');
    if (el) {
      const headerOffset = getHeaderOffset();
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setTimeout(() => {
        document.getElementById('clientName')?.focus();
      }, 450);
    }
  };

  const handleQuoteSubmitSuccess = (waMessage) => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);

    setTimeout(() => {
      window.open(`https://wa.me/8801960481983?text=${waMessage}`, '_blank');
    }, 500);
  };

  return (
    <>
      <Navbar
        isMobileOpen={isMobileOpen}
        onToggleMobile={() => setIsMobileOpen((prev) => !prev)}
      />

      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onOpenQuote={handleScrollToQuote}
      />

      <main>
        <Hero onOpenQuote={handleScrollToQuote} />
        <BrandIntro onOpenQuote={handleScrollToQuote} />
        <Collections />
        <BespokeExperience onOpenQuote={handleScrollToQuote} />
        <WhyHeaven />
        <Showroom />
        <FounderQuote />
        <Timeline />
        <FinalCTA onSubmitSuccess={handleQuoteSubmitSuccess} />
      </main>

      <Footer />

      <FloatingConcierge onOpenQuote={handleScrollToQuote} />

      <Toast show={showToast} />
    </>
  );
}
