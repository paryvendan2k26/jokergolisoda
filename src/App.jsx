import React from 'react';
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

export default function App() {
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
