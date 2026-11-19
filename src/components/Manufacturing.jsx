import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Manufacturing() {
  const trackRef = useRef(null);

  const images = [
    { src: '/manufacturing/codd-neck-counter-pressure-filling.webp', title: 'Joker Golisoda Automated Bottling Line' },
    { src: '/manufacturing/automated-bottle-washing.webp', title: 'Joker Golisoda Rotary Bottle Washer' },
    { src: '/manufacturing/carbonation-pressure-testing.webp', title: 'Joker Golisoda Carbonation Lab' },
    { src: '/manufacturing/hygienic-shrink-packaging.webp', title: 'Joker Golisoda Packaging Unit' },
    { src: '/manufacturing/wholesale-pallet-dispatch.webp', title: 'Joker Golisoda Dispatch Warehouse' },
    { src: '/manufacturing/ro-water-treatment.webp', title: 'Joker Golisoda 7-Stage RO Water Plant' },
  ];

  const loopImages = [...images, ...images];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: `-=${halfWidth}`,
      duration: 32,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % halfWidth),
      },
    });

    return () => tween.kill();
  }, []);

  return (
    <section
      id="manufacturing"
      className="py-20 sm:py-28 bg-joker-charcoal text-white border-b border-stone-800 overflow-hidden"
      aria-label="Joker Golisoda Bottling Unit"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-joker-red block mb-2">
          Modern Factory Infrastructure
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
          Joker Golisoda Bottling Unit
        </h2>
        <p className="text-stone-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto font-normal">
          Automated counter-pressure bottling, 7-stage RO purification, and statutory quality testing by Dhanvin Foods.
        </p>
      </div>

      {/* Clean moving reel of factory photos with dark backdrop */}
      <div className="w-full overflow-hidden py-3">
        <div ref={trackRef} className="flex gap-6 sm:gap-8 w-max pl-4">
          {loopImages.map((item, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 w-[340px] sm:w-[460px] md:w-[520px] lg:w-[580px] h-[230px] sm:h-[310px] md:h-[350px] lg:h-[390px] rounded-3xl overflow-hidden shadow-2xl border border-stone-800 bg-stone-900 group"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 py-3.5 px-4 bg-joker-charcoal/90 backdrop-blur-md border-t border-stone-800 text-center">
                <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
