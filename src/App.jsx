import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlavoursCarousel from './components/FlavoursCarousel';
import ComingSoonFlavours from './components/ComingSoonFlavours';
import TopSellers from './components/TopSellers';
import Customers from './components/Customers';
import Manufacturing from './components/Manufacturing';
import Certifications from './components/Certifications';
import Founders from './components/Founders';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-joker-cream text-joker-charcoal selection:bg-joker-red selection:text-white">
      {/* Floating Island Navbar (Floats & appears on every section) */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero & About Us with smooth animated bottle transition */}
        <Hero />

        {/* 2. Our Flavours - Clean GSAP Ticker */}
        <FlavoursCarousel />

        {/* 3. Coming Soon - 8 Exciting Flavours from Official Portfolio */}
        <ComingSoonFlavours />

        {/* 4. Top Best Sellers Leaderboard */}
        <TopSellers />

        {/* 5. Batch Delivery Workflow */}
        <Customers />

        {/* 6. Bottling Unit - Moving Factory Photos Reel */}
        <Manufacturing />


        {/* 8. Statutory Licenses Only */}
        <Certifications />

        {/* 9. Founders & Leadership */}
        <Founders />

        {/* 10. Order / Wholesale Contact & Google Maps */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
