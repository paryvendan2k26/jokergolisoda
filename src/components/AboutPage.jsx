import React, { useEffect } from 'react';
import { ArrowLeft, MessageCircle, Sparkles, ShieldCheck, Factory, Award } from 'lucide-react';
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
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-block text-xs font-black uppercase tracking-widest text-joker-red px-3.5 py-1 rounded-full bg-joker-red/10 border border-joker-red/20 mb-4">
              About Joker Golisoda
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-joker-charcoal tracking-tight uppercase leading-[1.05] mb-5">
              Authentic Indian Refreshment, <br />
              <span className="text-joker-red">With A Modern Twist.</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 font-medium leading-relaxed">
              {companyDetails.tagline}
            </p>
          </div>

          {/* Company Summary Cards */}
          <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-10 md:p-12 mb-16 sm:mb-20">
            <div className="max-w-3xl mx-auto text-left space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p>
                <strong>Joker Golisoda</strong> is an authentic Indian beverage brand manufactured by{' '}
                <strong className="text-joker-charcoal">Dhanvin Food & Food Products</strong>, based in Hosur, Tamil Nadu. Born from a deep appreciation for India's timeless marble soda heritage, Joker Golisoda revives the cherished tradition of classic Codd-neck glass bottles while meeting the highest modern hygiene and quality standards.
              </p>

              <p>
                From classic favourites like nostalgic <em>Paneer Rose</em>, zesty <em>Ginger Lemon</em>, and aromatic <em>Nannari</em> to vibrant modern fruit fusions like <em>Blueberry</em>, <em>Ripe Mango</em>, and <em>Nagpur Orange</em>, our beverages deliver crisp carbonation and pure, unforgettable flavor in every pop.
              </p>

              <p>
                Every single bottle is produced at our automated bottling unit in Hosur using 7-stage RO-purified water, food-grade carbon dioxide, and premium beverage ingredients—ensuring certified safety, consistent quality, and that signature, fizzy marble pop.
              </p>
            </div>

            {/* Quick Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 pt-10 border-t border-stone-100">
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 text-left">
                <div className="w-10 h-10 rounded-xl bg-joker-red/10 flex items-center justify-center text-joker-red mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h2 className="text-base font-black uppercase text-joker-charcoal mb-1">Authentic Goli Soda</h2>
                <p className="text-xs sm:text-sm text-stone-600">Heavy-gauge 300ml returnable glass bottles sealed with the iconic marble stopper.</p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-3">
                  <Factory className="w-5 h-5" />
                </div>
                <h2 className="text-base font-black uppercase text-joker-charcoal mb-1">Automated Unit</h2>
                <p className="text-xs sm:text-sm text-stone-600">Advanced 7-stage RO water treatment, rotary bottle washing, and counter-pressure bottling in Hosur.</p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 text-left">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-base font-black uppercase text-joker-charcoal mb-1">Quality Certified</h2>
                <p className="text-xs sm:text-sm text-stone-600">Manufactured under rigorous FSSAI standards with complete batch traceability.</p>
              </div>
            </div>
          </div>

          {/* Leadership & Founders Section - Names Only, No Contacts */}
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

            {/* Founders Cards - Strictly Name, Role & Company (No contact details) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {foundersList.map((founder, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
                >
                  {/* Monogram Avatar Badge */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-md mb-6"
                    style={{ backgroundColor: founder.accentColor }}
                  >
                    {founder.initials}
                  </div>

                  {/* Leader Name */}
                  <h3 className="text-xl sm:text-2xl font-black text-joker-charcoal uppercase tracking-tight mb-1.5">
                    {founder.name}
                  </h3>

                  {/* Designation */}
                  <p className="text-sm font-bold text-joker-red mb-1">
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
        <p>© 2026 Dhanvin Food & Food Products. All rights reserved. | Joker Golisoda™</p>
      </footer>
    </div>
  );
}
