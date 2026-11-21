import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlavoursCarousel from './components/FlavoursCarousel';
import ComingSoonFlavours from './components/ComingSoonFlavours';
import Customers from './components/Customers';
import Manufacturing from './components/Manufacturing';
import Certifications from './components/Certifications';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import AboutPage from './components/AboutPage';

export default function App() {
  const checkIsAboutPage = () => {
    if (typeof window === 'undefined') return false;
    const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
    const hash = window.location.hash.toLowerCase();
    return (
      path === '/about' ||
      path === '/about-us' ||
      hash === '#/about' ||
      hash === '#about-page'
    );
  };

  const [isAboutPage, setIsAboutPage] = useState(checkIsAboutPage);

  useEffect(() => {
    const handleLocationChange = () => {
      setIsAboutPage(checkIsAboutPage());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setIsAboutPage(false);
    window.scrollTo(0, 0);
  };

  if (isAboutPage) {
    return (
      <div className="min-h-screen flex flex-col bg-joker-cream text-joker-charcoal selection:bg-joker-red selection:text-white pb-20 md:pb-0">
        <AboutPage onNavigateHome={navigateToHome} />
        <MobileActionBar />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-joker-cream text-joker-charcoal selection:bg-joker-red selection:text-white pb-20 md:pb-0">
      {/* Floating Island Navbar (Floats & appears on every section) */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero & About Us with smooth animated bottle transition on desktop */}
        <Hero />

        {/* 2. Our Flavours - Clean 10-flavour grid (5 per row on desktop, 2 per row on mobile) */}
        <FlavoursCarousel />

        {/* 3. Coming Soon - 8 Exciting Flavours from Official Portfolio */}
        <ComingSoonFlavours />

        {/* 4. Batch Delivery Workflow */}
        <Customers />

        {/* 5. Bottling Unit - Moving Factory Photos Reel */}
        <Manufacturing />

        {/* 6. Statutory Licenses Only */}
        <Certifications />

        {/* 7. Order / Wholesale Contact & Google Maps */}
        <ContactSection />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* 9. Mobile Sticky Action Bar: WhatsApp (light green) + Call Now (dark green) */}
      <MobileActionBar />
    </div>
  );
}
