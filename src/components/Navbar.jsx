import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { companyDetails } from '../data/flavours';

export default function Navbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Disappear once user scrolls past the hero section
      const heroThreshold = window.innerHeight * 0.75;
      if (window.scrollY > heroThreshold) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-8 pointer-events-none'
      }`}
      aria-label="Floating Navigation"
    >
      <div className="flex items-center gap-6 sm:gap-8 px-5 sm:px-7 py-2.5 rounded-full bg-white/85 backdrop-blur-md border border-stone-200/90 shadow-xl shadow-black/5">
        {/* Logo */}
        <a href="#" className="flex items-center" aria-label="Joker Golisoda Home">
          <img
            src="/assets/logo-navy.webp"
            alt="Joker Golisoda"
            decoding="async"
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </a>

        {/* Links */}
        <div className="hidden sm:flex items-center gap-6 text-xs sm:text-sm font-semibold text-stone-700">
          <a href="#about" className="hover:text-joker-red transition-colors">
            About
          </a>
          <a href="#flavours" className="hover:text-joker-red transition-colors">
            Flavours
          </a>
          <a href="#manufacturing" className="hover:text-joker-red transition-colors">
            Bottling Unit
          </a>
          <a href="#licenses" className="hover:text-joker-red transition-colors">
            Licenses
          </a>
          <a href="#founders" className="hover:text-joker-red transition-colors">
            Founders
          </a>
          <a href="#contact" className="hover:text-joker-red transition-colors">
            Order
          </a>
        </div>

        {/* Quick WhatsApp Order Button */}
        <a
          href={`https://wa.me/${companyDetails.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-joker-red hover:bg-joker-red-dark text-white text-xs font-bold transition-all shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Order</span>
        </a>
      </div>
    </nav>
  );
}
