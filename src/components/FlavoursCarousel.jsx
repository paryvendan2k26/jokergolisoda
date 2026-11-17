import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { flavours } from '../data/flavours';
import FlavourCard from './FlavourCard';
import ProductModal from './ProductModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FlavoursCarousel() {
  const [selectedFlavour, setSelectedFlavour] = useState(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: `-=${halfWidth}`,
      duration: 38,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % halfWidth),
      },
    });

    tweenRef.current = tween;

    return () => {
      tween.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (tweenRef.current) tweenRef.current.pause();
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) tweenRef.current.play();
  };

  const handleManualScroll = (direction) => {
    if (!trackRef.current) return;
    const shift = direction === 'left' ? 340 : -340;
    gsap.to(trackRef.current, {
      x: `+=${shift}`,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const doubledFlavours = [...flavours, ...flavours];

  return (
    <section
      id="flavours"
      className="py-20 bg-joker-cream-light border-y border-stone-200/80 relative overflow-hidden"
      aria-label="Our Flavours"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-joker-charcoal tracking-tight">
              Our Flavours
            </h2>
            <p className="text-stone-500 text-sm sm:text-base mt-1">
              Authentic Indian sodas with the classic marble pop.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleManualScroll('left')}
              className="p-2.5 rounded-full bg-white border border-stone-300 hover:border-joker-red text-stone-700 hover:text-joker-red transition-all shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleManualScroll('right')}
              className="p-2.5 rounded-full bg-white border border-stone-300 hover:border-joker-red text-stone-700 hover:text-joker-red transition-all shadow-sm"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Track with bottom padding for overlapping bottle */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full overflow-hidden cursor-grab active:cursor-grabbing pt-2 pb-8"
      >
        <div ref={trackRef} className="flex gap-7 w-max pl-4">
          {doubledFlavours.map((flavour, index) => (
            <FlavourCard
              key={`${flavour.id}-${index}`}
              flavour={flavour}
              onSelect={(f) => setSelectedFlavour(f)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedFlavour && (
        <ProductModal
          flavour={selectedFlavour}
          onClose={() => setSelectedFlavour(null)}
        />
      )}
    </section>
  );
}
