import React, { useEffect } from 'react';
import { ArrowLeft, MessageCircle, MapPin } from 'lucide-react';
import { companyDetails, foundersList } from '../data/flavours';

export default function AboutPage({ onNavigateHome }) {
  // Ensure the page scrolls to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-joker-cream text-joker-charcoal selection:bg-joker-red selection:text-white">
      {/* Top Floating Navigation Bar */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex flex-col items-center px-3 sm:px-6 pointer-events-none">
        <nav
          className="pointer-events-auto w-full max-w-5xl rounded-full border border-stone-200/90 bg-white/95 backdrop-blur-md shadow-xl shadow-black/5 py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 flex items-center justify-between gap-4"
          aria-label="About Page Navigation"
        >
          {/* Logo & Brand */}
          <a
            href="/"
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
              }
            }}
            className="flex items-center gap-2.5 group whitespace-nowrap select-none"
            aria-label="Joker Golisoda Home"
          >
            <img
              src="/assets/joker-official-logo.png"
              alt="Joker Golisoda Logo"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-black text-sm lg:text-base tracking-tight text-joker-charcoal uppercase">
              Joker Golisoda
            </span>
          </a>

          {/* Action Links */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Small Location Pill */}
            <a
              href={companyDetails.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-all hover:text-joker-red"
              title="Hosur, Tamil Nadu (Google Maps)"
            >
              <MapPin className="w-3.5 h-3.5 text-joker-red flex-shrink-0" />
              <span>Hosur, Tamil Nadu</span>
            </a>

            <a
              href="/"
              onClick={(e) => {
                if (onNavigateHome) {
                  e.preventDefault();
                  onNavigateHome();
                }
              }}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-bold transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </a>

            <a
              href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent('Hello Joker Golisoda, I would like to place an order for bottles (₹35 MRP).')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-joker-red hover:bg-joker-red-dark text-white text-xs sm:text-sm font-extrabold shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Order Now</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="inline-block text-xs font-black uppercase tracking-widest text-joker-red px-3.5 py-1 rounded-full bg-joker-red/10 border border-joker-red/20">
                About Joker Golisoda
              </span>

              {/* Small Location Button */}
              <a
                href={companyDetails.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-300 text-xs font-bold transition-all hover:border-joker-red hover:text-joker-red"
                title="View plant location on Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 text-joker-red flex-shrink-0" />
                <span>Hosur, Tamil Nadu</span>
              </a>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-joker-charcoal tracking-tight uppercase leading-[1.05] mb-5">
              Authentic Indian Refreshment, <br />
              <span className="text-joker-red">With A Modern Twist.</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 font-medium leading-relaxed">
              {companyDetails.tagline}
            </p>
          </div>

          {/* Bottles Stack UI at Top of Section */}
          <div className="flex flex-col items-center justify-center relative w-full mb-14 sm:mb-16 select-none pointer-events-none">
            {/* 5 Bottles Horizontal Tiered Row */}
            <div className="relative z-10 flex items-end justify-center gap-1 sm:gap-2.5 md:gap-3.5 w-full max-w-xl mx-auto">
              {/* Bottle 1: Small Left (Green Apple) */}
              <div className="flex flex-col items-center -rotate-3 transition-transform duration-500">
                <img
                  src="/bottles/greenapple.webp"
                  alt="Joker Golisoda Green Apple Bottle"
                  loading="eager"
                  decoding="async"
                  className="h-32 sm:h-44 md:h-52 w-auto object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.35)]"
                />
              </div>

              {/* Bottle 2: Medium Left (Blueberry) */}
              <div className="flex flex-col items-center -rotate-1 transition-transform duration-500 -ml-1 sm:-ml-2">
                <img
                  src="/bottles/blueberry.webp"
                  alt="Joker Golisoda Blueberry Bottle"
                  loading="eager"
                  decoding="async"
                  className="h-40 sm:h-52 md:h-64 w-auto object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]"
                />
              </div>

              {/* Bottle 3: Largest Center Peak (Paneer Soda) */}
              <div className="relative z-20 flex flex-col items-center transition-transform duration-500 -ml-1 sm:-ml-2">
                <img
                  src="/bottles/paneer-soda.webp"
                  alt="Joker Golisoda Paneer Soda Bottle"
                  loading="eager"
                  decoding="async"
                  className="h-48 sm:h-64 md:h-76 w-auto object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)] scale-105"
                />
              </div>

              {/* Bottle 4: Medium Right (Orange) */}
              <div className="flex flex-col items-center rotate-1 transition-transform duration-500 -ml-1 sm:-ml-2">
                <img
                  src="/bottles/orange.webp"
                  alt="Joker Golisoda Orange Bottle"
                  loading="eager"
                  decoding="async"
                  className="h-40 sm:h-52 md:h-64 w-auto object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]"
                />
              </div>

              {/* Bottle 5: Small Right (Pineapple) */}
              <div className="flex flex-col items-center rotate-3 transition-transform duration-500 -ml-1 sm:-ml-2">
                <img
                  src="/bottles/pineapple.webp"
                  alt="Joker Golisoda Pineapple Bottle"
                  loading="eager"
                  decoding="async"
                  className="h-32 sm:h-44 md:h-52 w-auto object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.35)]"
                />
              </div>
            </div>

            {/* Pedestal Shadow */}
            <div className="relative z-10 w-4/5 max-w-md h-3 sm:h-4 bg-stone-400/30 rounded-full blur-md mt-1 mx-auto" />
          </div>

          {/* Company Summary Narrative */}
          <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-10 md:p-12 mb-16 sm:mb-20">
            <div className="max-w-3xl mx-auto text-left space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p>
                <strong>Joker Golisoda</strong> is an authentic Indian beverage brand manufactured by{' '}
                <strong className="text-joker-charcoal">Dhanvin Food & Food Products</strong>, based in Hosur, Tamil Nadu. Born from a deep appreciation for India's timeless marble soda heritage, Joker Golisoda introduces an innovative twist to the beloved tradition with modern, easy-to-use marble bottles that meet the highest hygiene and quality benchmarks.
              </p>

              <p>
                <strong>Smart Twist Innovation:</strong> Gone are the days of struggling to push the marble with wooden sticks or your fingers. With our innovative smart-twist cap technology, simply twist the cap—the marble drops down smoothly on its own, releasing instant effervescence. Effortless, mess-free, and ready to enjoy in seconds!
              </p>

              <p>
                From classic favourites like nostalgic <em>Paneer Rose</em>, zesty <em>Ginger Lemon</em>, and aromatic <em>Nannari</em> to vibrant modern fruit fusions like <em>Blueberry</em>, <em>Ripe Mango</em>, and <em>Nagpur Orange</em>, our beverages deliver crisp carbonation and pure, unforgettable flavor in every pop.
              </p>

              <p>
                Every single bottle is produced at our automated bottling unit in Hosur using pure water, food-grade carbon dioxide, and premium beverage ingredients—ensuring certified safety, consistent quality, and that signature, fizzy marble pop.
              </p>
            </div>
          </div>

          {/* Leadership & Founders Section - Plain, Neat, No Icons */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="mb-10 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-joker-red block mb-2">
                Leadership Team
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-joker-charcoal tracking-tight uppercase">
                Company Leadership
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-xl mx-auto">
                The driving minds behind Dhanvin Food & Food Products and the Joker Golisoda brand.
              </p>
            </div>

            {/* Plain & Neat Leaders Cards - No monogram icons, plain and neat */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {foundersList.map((founder, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-center"
                >
                  {/* Leader Name */}
                  <h3 className="text-xl sm:text-2xl font-black text-joker-charcoal uppercase tracking-tight mb-2">
                    {founder.name}
                  </h3>

                  {/* Designation */}
                  <p className="text-sm font-bold text-joker-red mb-1.5">
                    {founder.role}
                  </p>

                  {/* Company Name */}
                  <span className="text-xs text-stone-500 font-semibold tracking-wide block">
                    {founder.company}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation CTA at bottom */}
          <div className="text-center pt-8 border-t border-stone-200">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/"
                onClick={(e) => {
                  if (onNavigateHome) {
                    e.preventDefault();
                    onNavigateHome();
                  }
                }}
                className="px-8 py-3.5 rounded-full bg-joker-charcoal hover:bg-black text-white font-bold text-xs sm:text-sm tracking-wide uppercase transition-all hover:scale-105 active:scale-95"
              >
                Back to Home Page
              </a>

              <a
                href="/#flavours"
                className="px-8 py-3.5 rounded-full bg-joker-red hover:bg-joker-red-dark text-white font-bold text-xs sm:text-sm tracking-wide uppercase shadow-lg shadow-joker-red/25 transition-all hover:scale-105 active:scale-95"
              >
                Explore 10 Flavours
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-8 bg-joker-charcoal text-white text-center text-xs text-stone-400 border-t border-stone-800">
        <p>© 2026 Dhanvin Food & Food Products. All rights reserved. | Joker Golisoda™ • Hosur, Tamil Nadu</p>
      </footer>
    </div>
  );
}
