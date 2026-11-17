import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';
import { companyDetails } from '../data/flavours';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const bottleRef = useRef(null);
  const aboutTargetRef = useRef(null);

  useEffect(() => {
    // Disable browser automatic scroll restoration quirks on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Calculate delta from screen center to the About Us target column
      const getTargetDeltaX = () => {
        if (!aboutTargetRef.current) return window.innerWidth * 0.25;
        const tRect = aboutTargetRef.current.getBoundingClientRect();
        const tCenterX = tRect.left + tRect.width / 2;
        const screenCenterX = window.innerWidth / 2;
        return tCenterX - screenCenterX;
      };

      const mm = gsap.matchMedia();

      // Desktop & Tablet (>= 768px): Centered & tilted -12° in Hero -> Glides to right & tilts +8° in About Us
      mm.add('(min-width: 768px)', () => {
        gsap.set(bottleRef.current, {
          rotate: -12,
          scale: 1,
          x: 0,
          y: 0,
          transformOrigin: '50% 50%',
        });

        gsap.to(bottleRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            endTrigger: aboutRef.current,
            end: 'center center',
            scrub: 1,
            invalidateOnRefresh: true,
          },
          x: () => getTargetDeltaX(),
          rotate: 8,
          scale: 0.95,
          ease: 'power1.inOut',
        });
      });

      // Mobile (< 768px): Centered tilt transition
      mm.add('(max-width: 767px)', () => {
        gsap.set(bottleRef.current, {
          rotate: -8,
          scale: 1,
          x: 0,
          y: 0,
          transformOrigin: '50% 50%',
        });

        gsap.to(bottleRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            endTrigger: aboutRef.current,
            end: 'center center',
            scrub: 1,
            invalidateOnRefresh: true,
          },
          rotate: 6,
          scale: 0.88,
          ease: 'power1.inOut',
        });
      });

      // Refresh ScrollTrigger once DOM layout stabilizes
      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-visible">
      {/* ========================================================================= */}
      {/* STICKY ORANGE BOTTLE LAYER (z-40, Always in front, Natural clean sizing)   */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-40 overflow-visible">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none">
          <div className="relative flex items-center justify-center pointer-events-none">
            <img
              ref={bottleRef}
              src="/assets/hero-orange-bottle.png"
              alt="Joker Golisoda Orange Bottle"
              className="relative z-40 h-[440px] sm:h-[520px] lg:h-[580px] w-auto object-contain select-none will-change-transform pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* ========================================================== */}
      {/* 1. HERO SECTION (100% stable text, bold & clean)          */}
      {/* ========================================================== */}
      <section
        ref={heroRef}
        id="home"
        className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-joker-charcoal text-white overflow-hidden pt-20 pb-16 lg:py-0"
        aria-label="Joker Golisoda Hero"
      >
        {/* Subtle Looping Soda Bubbles Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/hero-poster.jpg"
            className="w-full h-full object-cover opacity-30 filter brightness-75 contrast-125"
          >
            <source src="/assets/hero-soda-loop.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-joker-charcoal via-joker-charcoal/60 to-transparent" />
        </div>

        {/* Hero 3-Column Grid */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4">
          {/* Left Column: Brand Logo & Huge Bold Title */}
          <div className="lg:col-span-4 text-center lg:text-left flex flex-col items-center lg:items-start z-10">
            <div className="mb-4 sm:mb-6">
              <img
                src="/assets/logo-white.png"
                alt="Joker Golisoda"
                className="h-14 sm:h-20 w-auto object-contain drop-shadow-md"
              />
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.96] uppercase">
              Authentic <br />
              <span className="text-joker-red">Indian</span> <br />
              Golisoda.
            </h1>
          </div>

          {/* Center Column: Stage reserved for the sticky Orange Bottle */}
          <div className="lg:col-span-4 flex items-center justify-center relative min-h-[380px] sm:min-h-[480px] lg:min-h-[600px] pointer-events-none">
            {/* Bottle floats here from the sticky layer */}
          </div>

          {/* Right Column: Big Punchy Text & Action Button */}
          <div className="lg:col-span-4 text-center lg:text-right flex flex-col items-center lg:items-end z-10">
            <div className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.02] uppercase mb-8">
              Natural <br />
              Cane Sugar. <br />
              <span className="text-amber-400">Pure Fizz.</span>
            </div>

            <div>
              <a
                href="#flavours"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-joker-red hover:bg-joker-red-dark text-white font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-joker-red/35 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Flavours</span>
                <ArrowDown className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Down Scroll Anchor */}
        <a
          href="#about"
          aria-label="Scroll down to About Us"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-stone-400 hover:text-white transition-colors animate-bounce p-2"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </section>

      {/* ========================================================== */}
      {/* 2. ABOUT US SECTION (Simple, Clean, Stable)                */}
      {/* ========================================================== */}
      <section
        ref={aboutRef}
        id="about"
        className="relative z-20 min-h-screen flex items-center py-24 bg-joker-cream border-b border-stone-200/80 overflow-visible text-joker-charcoal"
        aria-label="About Joker Golisoda"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Simple Clean Narrative & Pillars */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-joker-red block mb-3">
                About Joker Golisoda
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-joker-charcoal tracking-tight leading-[1.08] mb-6">
                The Real Marble Soda Heritage.
              </h2>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal mb-5 max-w-xl">
                Joker Golisoda by <strong>Dhanvin Foods</strong> revives the pure nostalgia of authentic Indian Codd-neck marble soda. Crafted with 100% natural cane sugar, 7-stage RO purified water, and genuine fruit extracts.
              </p>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal mb-8 max-w-xl">
                Every bottle delivers that unmistakable thunderous marble pop and crisp, high-effervescence carbonation in heavy-gauge returnable glass bottles.
              </p>

              {/* 3 Simple Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-xl">
                <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm">
                  <span className="text-xs font-bold text-stone-900 block mb-0.5">100% Cane Sugar</span>
                  <span className="text-[11px] text-stone-500">Zero artificial sweeteners</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm">
                  <span className="text-xs font-bold text-stone-900 block mb-0.5">Codd Glass Bottle</span>
                  <span className="text-[11px] text-stone-500">Recyclable marble seal</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm">
                  <span className="text-xs font-bold text-stone-900 block mb-0.5">High Effervescence</span>
                  <span className="text-[11px] text-stone-500">Maximum fizzy bite</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#flavours"
                  className="px-6 py-3.5 rounded-full bg-joker-charcoal hover:bg-black text-white font-bold text-xs sm:text-sm tracking-wide uppercase transition-all hover:scale-105"
                >
                  Explore 12 Flavours
                </a>

                <a
                  href={`https://wa.me/${companyDetails.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-stone-100 text-stone-800 font-bold text-xs sm:text-sm border border-stone-300 transition-all hover:border-emerald-500 hover:text-emerald-700 shadow-sm"
                >
                  Order Direct on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Column: Destination Target for the Bottle */}
            <div className="lg:col-span-5 flex items-center justify-center relative min-h-[400px] sm:min-h-[500px] pointer-events-none">
              <div ref={aboutTargetRef} className="w-2 h-2 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
