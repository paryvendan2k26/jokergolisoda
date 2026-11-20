import React, { useState } from 'react';
import { flavours } from '../data/flavours';
import FlavourCard from './FlavourCard';
import ProductModal from './ProductModal';

export default function FlavoursCarousel() {
  const [selectedFlavour, setSelectedFlavour] = useState(null);

  // Exactly 10 flavours as requested
  const displayFlavours = flavours.slice(0, 10);

  return (
    <section
      id="flavours"
      className="py-16 sm:py-20 bg-joker-cream-light border-y border-stone-200/80 relative"
      aria-label="Our Flavours"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean & Bold */}
        <div className="text-center sm:text-left mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-joker-red block mb-1">
            Authentic Indian Marble Soda
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-joker-charcoal tracking-tight uppercase">
            Joker Golisoda Flavours
          </h2>
          <p className="text-stone-500 text-sm sm:text-base mt-1 font-normal max-w-2xl">
            10 authentic Indian golisoda flavours crafted with 100% natural cane sugar and maximum fizz.
          </p>
        </div>

        {/* 10 Flavours Grid: 5 cards in each row on desktop, 2 cards in each row on phone screen */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {displayFlavours.map((flavour) => (
            <FlavourCard
              key={flavour.id}
              flavour={flavour}
              onSelect={(f) => setSelectedFlavour(f)}
            />
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedFlavour && (
        <ProductModal
          flavour={selectedFlavour}
          onClose={() => setSelectedFlavour(null)}
        />
      )}
    </section>
  );
}
