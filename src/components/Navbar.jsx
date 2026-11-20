import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { companyDetails } from '../data/flavours';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press, screen resize to desktop, and lock background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('resize', handleResize);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Flavours', href: '#flavours' },
    {
      label: 'Coming Soon',
      href: '#coming-soon',
      badge: '8',
    },
    { label: 'Bottling Unit', href: '#manufacturing' },
    { label: 'Licenses', href: '#licenses' },
    { label: 'Order', href: '#contact' },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[45] lg:hidden pointer-events-auto transition-opacity duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex flex-col items-center px-3 sm:px-6 pointer-events-none">
        {/* Main Pill Navbar */}
        <nav
          className={`pointer-events-auto w-full max-w-6xl rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-md border-stone-300 shadow-2xl shadow-black/10 py-2 sm:py-2.5 px-4 sm:px-6 md:px-8'
              : 'bg-white/90 backdrop-blur-md border-stone-200/90 shadow-xl shadow-black/5 py-2.5 sm:py-3 px-5 sm:px-7 md:px-9'
          }`}
          aria-label="Main Navigation"
        >
          <div className="flex items-center justify-between gap-4 sm:gap-6">
            {/* Brand Logo & Name */}
            <a
              href="#"
              className="flex items-center gap-2.5 flex-shrink-0 group whitespace-nowrap select-none"
              aria-label="Joker Golisoda Home"
            >
              <img
                src="/assets/joker-official-logo.png"
                alt="Joker Golisoda Logo"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="hidden sm:inline font-black text-sm lg:text-base tracking-tight text-joker-charcoal uppercase">
                Joker Golisoda
              </span>
            </a>

            {/* Desktop Nav Links - Single Line, Never Wraps into 2 Lines */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-[13px] font-bold text-stone-700 whitespace-nowrap">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-joker-red transition-colors whitespace-nowrap flex items-center gap-1.5 py-1"
                >
                  <span className="whitespace-nowrap">{link.label}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.2 rounded-full bg-joker-red text-white text-[10px] font-black leading-tight whitespace-nowrap">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 whitespace-nowrap">
              <a
                href={`tel:${companyDetails.phone}`}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-all whitespace-nowrap"
                aria-label={`Call Wholesale Hotline ${companyDetails.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-joker-red" />
                <span>Call</span>
              </a>

              {/* WhatsApp / Ordering Button with Number 8825751371 */}
              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent('Hello Joker Golisoda, I would like to place an order for bottles (₹35 MRP).')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-joker-red hover:bg-joker-red-dark text-white text-xs sm:text-sm font-extrabold transition-all shadow-sm hover:scale-105 active:scale-95 whitespace-nowrap"
                title="Order on WhatsApp: 8825751371"
                aria-label="Order on WhatsApp: 8825751371"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Order:</span>
                <span>8825751371</span>
              </a>

              {/* Mobile Hamburger / Close Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full text-stone-700 hover:text-joker-red hover:bg-stone-100 transition-colors"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-joker-red" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Dropdown Panel - Clean Rectangular Card with Slightly Rounded Corners */}
        {mobileMenuOpen && (
          <div
            className="pointer-events-auto lg:hidden w-full max-w-md mt-2 bg-white/98 backdrop-blur-xl border border-stone-200/90 rounded-2xl shadow-2xl shadow-stone-900/15 p-3.5 sm:p-4 flex flex-col gap-1 max-h-[calc(100dvh-5.5rem)] overflow-y-auto animate-menu-drop"
            role="dialog"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-stone-800 hover:bg-stone-100 hover:text-joker-red active:bg-stone-200 transition-colors"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-joker-red text-white text-[11px] font-black">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="mt-2 pt-2 border-t border-stone-100 flex flex-col gap-2">
              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent('Hello Joker Golisoda, I would like to place an order for bottles (₹35 MRP).')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-joker-red hover:bg-joker-red-dark text-white text-xs font-extrabold shadow-sm active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp: 8825751371</span>
              </a>

              <a
                href={`tel:${companyDetails.phone}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-800 text-xs font-bold transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-joker-red" />
                  <span>Call Hotline</span>
                </span>
                <span className="text-stone-600 font-mono text-[11px] font-bold">{companyDetails.phoneFormatted}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
