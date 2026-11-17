import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlavoursCarousel from './components/FlavoursCarousel';
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
      {/* Floating Island Navbar (disappears past hero) */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Our Flavours - Clean GSAP Ticker */}
        <FlavoursCarousel />

        {/* 3. Top 5 Best Sellers Leaderboard */}
        <TopSellers />

        {/* 4. Direct Delivery */}
        <Customers />

        {/* 4. Bottling Unit - Manufacturing Timeline & Left-to-Right Moving Images */}
        <Manufacturing />

        {/* 5. Licenses Only */}
        <Certifications />

        {/* 6. Founders & Leadership */}
        <Founders />

        {/* 7. Order / Wholesale Contact */}
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
