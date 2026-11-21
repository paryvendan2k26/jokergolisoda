import React, { useState } from 'react';
import { topSellers } from '../data/flavours';
import ProductModal from './ProductModal';
import { ArrowRight } from 'lucide-react';

export default function TopSellers() {
  const [selectedFlavour, setSelectedFlavour] = useState(null);

  // Take the top 3 sellers
  const top3Sellers = topSellers.slice(0, 3);

  return (
    <section
      id="top-sellers"
      className="py-16 sm:py-24 bg-joker-cream border-b border-stone-200/80 text-left"
      aria-label="Top 3 Sellers"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Narrative & Flavour Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-joker-red block mb-2">
              Wholesale Best Sellers
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-joker-charcoal tracking-tight uppercase leading-[1.08] mb-4">
              Top 3 Sellers
            </h2>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal mb-3 max-w-xl">
              Our all-time crowd favourites driving the highest reorder turnover across retail outlets, supermarkets, and restaurants.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal mb-6 max-w-xl">
              Served in innovative 300ml twist-cap marble bottles for that unmistakable marble pop and crisp fizz.
            </p>

            {/* Quick 3 Ranks Pill List */}
            <div className="space-y-2.5 max-w-md mb-8">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-stone-200/90 shadow-sm">
                <span className="w-6 h-6 rounded-full bg-joker-red text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <div>
                  <span className="text-sm font-bold text-stone-900 block leading-tight">Paneer Rose Soda</span>
                  <span className="text-[11px] text-stone-500">Legendary South Indian rose cooling essence</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-stone-200/90 shadow-sm">
                <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <div>
                  <span className="text-sm font-bold text-stone-900 block leading-tight">Fresh Orange</span>
                  <span className="text-[11px] text-stone-500">Zesty mandarin citrus sparkle</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-stone-200/90 shadow-sm">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <div>
                  <span className="text-sm font-bold text-stone-900 block leading-tight">Ripe Mango</span>
                  <span className="text-[11px] text-stone-500">Golden tropical Alphonso sweetness</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-joker-charcoal hover:bg-black text-white font-black text-xs sm:text-sm tracking-wider uppercase transition-all hover:scale-105 active:scale-95"
              >
                <span>Order Top 3 Crates</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Bottles Side-by-Side (No card boxes) */}
          <div className="lg:col-span-6 flex items-end justify-center gap-3 sm:gap-6 pt-4 lg:pt-0">
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
                className="group flex flex-col items-center justify-end cursor-pointer select-none transition-transform duration-300 hover:-translate-y-2 text-center flex-1 max-w-[150px] sm:max-w-[180px]"
                aria-label={`View ${item.name}`}
              >
                {/* Bottle Image with soft ambient glow */}
                <div className="relative flex items-center justify-center mb-3 w-full">
                  <div
                    className="absolute inset-0 rounded-full blur-2xl opacity-25 group-hover:opacity-45 transition-opacity pointer-events-none scale-75"
                    style={{ backgroundColor: item.accentColor }}
                  />
                  <img
                    src={item.bottleImage}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="relative z-10 h-44 sm:h-56 md:h-64 lg:h-72 w-auto object-contain filter drop-shadow-[0_12px_22px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                  />
                </div>

                {/* Just the Name */}
                <h3 className="text-xs sm:text-base md:text-lg font-black text-joker-charcoal uppercase tracking-tight leading-tight">
                  {item.name}
                </h3>
                <span className="text-[10px] sm:text-xs font-semibold text-stone-500 mt-0.5">
                  Rank #{item.rankNumber}
                </span>
              </div>
            ))}
          </div>
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
