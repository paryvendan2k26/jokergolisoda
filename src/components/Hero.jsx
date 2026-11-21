import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, MapPin } from 'lucide-react';
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

      // Desktop (>= 1024px): Centered & tilted -12° in Hero -> Glides to right & tilts +8° in About Us
      mm.add('(min-width: 1024px)', () => {
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

      // Mobile & Tablet (< 1024px): Animation disabled per user requirement.
      // Clean in-flow layout with centered hero joker mascot.

      // Refresh ScrollTrigger once DOM layout stabilizes
      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-visible">
      {/* ========================================================================= */}
      {/* STICKY ORANGE BOTTLE LAYER (Laptop & Large Screens only: lg:)              */}
      {/* ========================================================================= */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-40 overflow-visible">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none">
          <div className="relative flex items-center justify-center pointer-events-none">
            <img
              ref={bottleRef}
              src="/assets/hero-orange-bottle.webp"
              alt="Joker Golisoda Orange Bottle"
              decoding="async"
              className="relative z-40 lg:h-[580px] xl:h-[620px] w-auto object-contain select-none will-change-transform pointer-events-none"
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
        className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-joker-charcoal text-white overflow-hidden pt-20 pb-0 lg:py-0"
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

        {/* ------------------------------------------------------------- */}
        {/* MOBILE & TABLET LAYOUT (< 1024px, lg:hidden)                  */}
        {/* Text higher up + Centered large hero joker mascot (No gap)   */}
        {/* ------------------------------------------------------------- */}
        <div className="block lg:hidden relative z-10 w-full max-w-xl mx-auto flex flex-col items-center justify-between min-h-[calc(100vh-5rem)] pt-2 pb-0">
          {/* Text block positioned higher up */}
          <div className="flex flex-col items-center text-center z-20 flex-shrink-0">
            <div className="mb-2">
              <img
                src="/assets/joker-official-logo.png"
                alt="Joker Golisoda"
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-md"
              />
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[0.98] uppercase mb-3 sm:mb-4">
              Authentic <br className="sm:hidden" />
              <span className="text-joker-red">Indian</span> Golisoda.
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
              <a
                href="#flavours"
                className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-joker-red hover:bg-joker-red-dark text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-joker-red/35 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Flavours</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Small Location Button on Mobile */}
              <a
                href={companyDetails.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 border border-white/20 text-xs font-bold transition-all backdrop-blur-sm shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-joker-red" />
                <span>Hosur, TN</span>
              </a>
            </div>
          </div>

          {/* Centered Hero Joker - Much bigger, anchored directly to bottom of Hero section (No gap to next section) */}
          <div className="relative z-10 w-full flex-1 flex items-end justify-center pt-2 overflow-hidden">
            <img
              src="/assets/herojoker.webp"
              alt="Joker Mascot"
              loading="eager"
              decoding="async"
              className="h-[430px] sm:h-[530px] md:h-[620px] max-h-[62vh] w-auto object-contain object-bottom select-none filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] translate-y-1"
            />
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP LAYOUT (>= 1024px, hidden lg:grid)                    */}
        {/* 3-Column Grid + Animated Bottle Stage + Final Joker at Right */}
        {/* ------------------------------------------------------------- */}
        <div className="hidden lg:grid relative z-10 max-w-7xl mx-auto w-full grid-cols-12 items-center gap-4 min-h-screen py-0">
          {/* Left Column: Brand Logo & Huge Bold Title + Explore CTA */}
          <div className="col-span-5 text-left flex flex-col items-start z-20">
            <div className="mb-6">
              <img
                src="/assets/joker-official-logo.png"
                alt="Joker Golisoda"
                className="h-20 sm:h-28 w-auto object-contain drop-shadow-md"
              />
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.96] uppercase mb-6 sm:mb-8">
              Authentic <br />
              <span className="text-joker-red">Indian</span> <br />
              Golisoda.
            </h1>

            <div className="pt-1 flex items-center gap-3">
              <a
                href="#flavours"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-joker-red hover:bg-joker-red-dark text-white font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-joker-red/35 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Flavours</span>
                <ArrowDown className="w-5 h-5" />
              </a>

              {/* Small Location Button on Desktop */}
              <a
                href={companyDetails.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold transition-all hover:scale-105 backdrop-blur-sm shadow-sm"
                title="View Bottling Plant in Hosur on Google Maps"
              >
                <MapPin className="w-4 h-4 text-joker-red" />
                <span>Hosur, Tamil Nadu</span>
              </a>
            </div>
          </div>

          {/* Center Column: Stage reserved for the sticky Orange Bottle on desktop */}
          <div className="col-span-4 flex items-center justify-center relative min-h-[600px] z-20" />

          {/* Right Column: Grid spacer on desktop */}
          <div className="col-span-3" />
        </div>

        {/* Desktop Final Joker Character (>= 1024px) - Clean transparent background, no colored gradient */}
        <div className="hidden lg:flex absolute bottom-0 right-0 z-10 pointer-events-none items-end justify-end select-none">
          <img
            src="/assets/finaljoker.webp"
            alt="Joker Mascot"
            loading="eager"
            decoding="async"
            className="relative z-10 h-[560px] xl:h-[680px] 2xl:h-[750px] w-auto object-contain object-bottom filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.7)] transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Down Scroll Anchor (Desktop only - on mobile mascot fills the bottom) */}
        <a
          href="#about"
          aria-label="Scroll down to About Us"
          className="hidden lg:flex absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 text-stone-400 hover:text-white transition-colors animate-bounce p-2 z-30"
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
                Unleash the Taste. <br />
                <span className="text-joker-red">Experience the Twist!</span>
              </h2>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal mb-8 max-w-xl">
                Welcome to <strong>Joker Golisoda</strong>, where traditional refreshment meets exciting flavours and a bold, playful identity!
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#flavours"
                  className="px-6 py-3.5 rounded-full bg-joker-charcoal hover:bg-black text-white font-bold text-xs sm:text-sm tracking-wide uppercase transition-all hover:scale-105"
                >
                  Explore 10 Flavours
                </a>

                <a
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-stone-100 text-stone-800 font-bold text-xs sm:text-sm border border-stone-300 transition-all hover:border-joker-red hover:text-joker-red shadow-sm"
                >
                  About Our Company & Team →
                </a>

                {/* Small Location Button */}
                <a
                  href={companyDetails.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 text-xs font-bold transition-all hover:border-joker-red hover:text-joker-red shadow-sm"
                  title="View Hosur plant location on Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-joker-red flex-shrink-0" />
                  <span>Hosur, Tamil Nadu</span>
                </a>
              </div>
            </div>

            {/* Right Column: Destination Target for sticky bottle on desktop; In-flow showcase bottle on mobile & tablet */}
            <div className="lg:col-span-5 flex items-center justify-center relative min-h-0 lg:min-h-[500px] mt-6 lg:mt-0">
              <div ref={aboutTargetRef} className="w-2 h-2 pointer-events-none hidden lg:block" />

              {/* Mobile & Tablet static showcase bottle (< 1024px) */}
              <div className="block lg:hidden text-center py-4">
                <div className="relative mx-auto flex items-center justify-center">
                  <img
                    src="/assets/hero-orange-bottle.webp"
                    alt="Joker Golisoda Marble Bottle Heritage"
                    loading="lazy"
                    decoding="async"
                    className="relative z-10 h-[260px] sm:h-[320px] w-auto object-contain mx-auto rotate-6 drop-shadow-xl select-none"
                  />
                </div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-stone-500 mt-4 px-3.5 py-1 bg-white rounded-full border border-stone-200/80 shadow-sm">
                  Signature Returnable Codd-Neck Glass
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
