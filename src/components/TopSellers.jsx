import React, { useState } from 'react';
import { topSellers } from '../data/flavours';
import ProductModal from './ProductModal';

export default function TopSellers() {
  const [selectedFlavour, setSelectedFlavour] = useState(null);

  // Take the top 3 sellers
  const top3Sellers = topSellers.slice(0, 3);

  return (
    <section
      id="top-sellers"
      className="py-14 sm:py-20 bg-joker-cream border-b border-stone-200/80"
      aria-label="Top 3 Sellers"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - clean and minimal */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-joker-red block mb-1">
            Wholesale Favorites
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-joker-charcoal tracking-tight uppercase">
            Top 3 Sellers
          </h2>
        </div>

        {/* Minimal Showcase: Just the Bottle Image and Name (No heavy cards) */}
        <div className="grid grid-cols-3 gap-3 sm:gap-8 items-end max-w-3xl mx-auto">
          {top3Sellers.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedFlavour(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedFlavour(item);
                }
              }}
              className="group flex flex-col items-center justify-end cursor-pointer select-none transition-transform duration-300 hover:-translate-y-2 text-center"
              aria-label={`View ${item.name}`}
            >
              {/* Bottle Image with soft ambient glow */}
              <div className="relative flex items-center justify-center mb-3 sm:mb-4 w-full">
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none scale-75"
                  style={{ backgroundColor: item.accentColor }}
                />
                <img
                  src={item.bottleImage}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 h-44 sm:h-64 md:h-72 w-auto object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.25)] group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                />
              </div>

              {/* Just the Name */}
              <h3 className="text-sm sm:text-lg md:text-xl font-black text-joker-charcoal uppercase tracking-tight leading-tight">
                {item.name}
              </h3>
            </div>
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
