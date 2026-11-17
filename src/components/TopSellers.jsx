import React, { useState } from 'react';
import { topSellers } from '../data/flavours';
import ProductModal from './ProductModal';
import { Trophy, Medal, Award, ArrowRight } from 'lucide-react';

export default function TopSellers() {
  const [selectedFlavour, setSelectedFlavour] = useState(null);

  // Take only the top 3 sellers
  const top3Sellers = topSellers.slice(0, 3);

  // Badging helper for Top 3
  const renderBadge = (rankNumber) => {
    switch (rankNumber) {
      case 1:
        return (
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-stone-900 font-black text-xs uppercase tracking-wider shadow-sm">
            <Trophy className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>#1 Top Seller</span>
          </div>
        );
      case 2:
        return (
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-stone-900 font-black text-xs uppercase tracking-wider shadow-sm">
            <Medal className="w-3.5 h-3.5 text-stone-700" />
            <span>#2 Most Loved</span>
          </div>
        );
      case 3:
        return (
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-stone-900 font-black text-xs uppercase tracking-wider shadow-sm">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            <span>#3 Summer Hit</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="top-sellers"
      className="py-16 sm:py-24 bg-joker-cream border-b border-stone-200/80"
      aria-label="Top 3 Sellers"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center sm:text-left mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-joker-red block mb-2">
            Wholesale Favorites
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-joker-charcoal tracking-tight">
            Top 3 Sellers
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Our highest-demand marble sodas crafted with natural cane sugar and high fizz.
          </p>
        </div>

        {/* 3 Horizontal Bright-Colored Cards (Stacked one on top of the other) */}
        <div className="space-y-5 sm:space-y-6">
          {top3Sellers.map((item) => (
            <div
              key={item.rank}
              onClick={() => setSelectedFlavour(item)}
              style={{ backgroundColor: item.cardBg }}
              className="group relative rounded-3xl p-6 sm:p-8 lg:p-9 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 overflow-hidden select-none"
            >
              {/* Inset dashed decorative inner border */}
              <div className="absolute inset-3 rounded-2xl border border-dashed border-white/30 pointer-events-none" />

              {/* Lighter quarter-circle/oval backdrop in right corner */}
              <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-white/15 pointer-events-none transition-transform duration-500 group-hover:scale-110" />

              {/* Left Column: Badging & Bold Letters */}
              <div className="relative z-10 flex-1 min-w-0 text-left w-full sm:w-auto">
                {/* Badging Row */}
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  {renderBadge(item.rankNumber)}

                  <span className="text-[11px] font-bold text-white/90 bg-black/20 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wider">
                    200ml Glass Codd Bottle
                  </span>
                </div>

                {/* Bold Letters Flavour Name */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-none drop-shadow-sm mb-2">
                  {item.name}
                </h3>

                {/* Subtitle & Tagline */}
                <p className="text-white/90 text-sm sm:text-base font-medium max-w-xl mb-5">
                  {item.subName} • {item.tagline}
                </p>

                {/* Action Link */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-stone-900 font-bold text-xs uppercase tracking-wider transition-all shadow-sm">
                  <span>View Wholesale Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Right Column: Prominent Bottle Standing Inside Card */}
              <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-full sm:w-56 h-48 sm:h-56">
                <img
                  src={item.bottleImage}
                  alt={item.name}
                  loading="lazy"
                  className="h-44 sm:h-52 lg:h-56 w-auto object-contain drop-shadow-2xl group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-500 pointer-events-none"
                />
              </div>
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
