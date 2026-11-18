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
    if (!halfWidth) return;

    // Continuous smooth linear marquee
    const tween = gsap.to(track, {
      x: `-=${halfWidth}`,
      duration: 38,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          let val = parseFloat(x) % halfWidth;
          if (val > 0) val -= halfWidth;
          return val;
        }),
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

  // 100% reliable manual navigation that tweens the continuous marquee
  const handleManualScroll = (direction) => {
    const tween = tweenRef.current;
    const track = trackRef.current;
    if (!tween || !track) return;

    const halfWidth = track.scrollWidth / 2;
    if (!halfWidth) return;

    // Time delta equivalent to 1 card distance (approx 340px)
    const cardStep = 340;
    const timeDelta = (cardStep / halfWidth) * 38;
    const shift = direction === 'left' ? -timeDelta : timeDelta;

    // Smoothly shift the active tween time forward or backward
    gsap.to(tween, {
      time: `+=${shift}`,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const doubledFlavours = [...flavours, ...flavours];

  return (
    <section
      id="flavours"
      className="py-20 bg-joker-cream-light border-y border-stone-200/80 relative overflow-hidden"
      aria-label="Joker Golisoda Flavours"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-joker-charcoal tracking-tight uppercase">
              Joker Golisoda Flavours
            </h2>
            <p className="text-stone-500 text-sm sm:text-base mt-1">
              12 authentic Indian marble soda flavours crafted by Joker Golisoda.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 relative z-20">
            <button
              type="button"
              onClick={() => handleManualScroll('left')}
              className="p-2.5 rounded-full bg-white border border-stone-300 hover:border-joker-red text-stone-700 hover:text-joker-red transition-all shadow-sm cursor-pointer active:scale-95"
              aria-label="Previous Flavours"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleManualScroll('right')}
              className="p-2.5 rounded-full bg-white border border-stone-300 hover:border-joker-red text-stone-700 hover:text-joker-red transition-all shadow-sm cursor-pointer active:scale-95"
              aria-label="Next Flavours"
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
