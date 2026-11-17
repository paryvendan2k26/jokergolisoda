import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Manufacturing() {
  const trackRef = useRef(null);

  const images = [
    { src: '/manufacturing/codd-neck-counter-pressure-filling.jpg', title: 'Automated Bottling Line' },
    { src: '/manufacturing/automated-bottle-washing.jpg', title: 'Rotary Bottle Washer' },
    { src: '/manufacturing/carbonation-pressure-testing.jpg', title: 'Carbonation Lab' },
    { src: '/manufacturing/hygienic-shrink-packaging.jpg', title: 'Packaging Unit' },
    { src: '/manufacturing/wholesale-pallet-dispatch.jpg', title: 'Dispatch Warehouse' },
    { src: '/manufacturing/ro-water-treatment.jpg', title: 'RO Water Treatment' },
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
      className="py-20 sm:py-24 bg-white border-b border-stone-200/80 overflow-hidden"
      aria-label="Bottling Unit"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-joker-charcoal tracking-tight">
          Bottling Unit
        </h2>
      </div>

      {/* Clean moving reel of factory photos - enlarged cards */}
      <div className="w-full overflow-hidden py-3">
        <div ref={trackRef} className="flex gap-6 sm:gap-8 w-max pl-4">
          {loopImages.map((item, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 w-[340px] sm:w-[460px] md:w-[520px] lg:w-[580px] h-[230px] sm:h-[310px] md:h-[350px] lg:h-[390px] rounded-3xl overflow-hidden shadow-md border border-stone-200 group"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 py-3 px-4 bg-white/95 backdrop-blur-md border-t border-stone-200/80 text-center">
                <span className="text-sm sm:text-base font-bold text-joker-charcoal">
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
