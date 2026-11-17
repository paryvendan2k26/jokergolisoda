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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-stone-900 font-black text-[11px] uppercase tracking-wider shadow-sm">
            <Trophy className="w-3 h-3 fill-amber-500 text-amber-500" />
            <span>#1 Top Seller</span>
          </div>
        );
      case 2:
        return (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-stone-900 font-black text-[11px] uppercase tracking-wider shadow-sm">
            <Medal className="w-3 h-3 text-stone-700" />
            <span>#2 Most Loved</span>
          </div>
        );
      case 3:
        return (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-stone-900 font-black text-[11px] uppercase tracking-wider shadow-sm">
            <Award className="w-3 h-3 text-amber-700" />
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
      className="py-12 sm:py-16 bg-joker-cream border-b border-stone-200/80"
      aria-label="Top 3 Sellers"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - clean and compact */}
        <div className="text-center sm:text-left mb-8 sm:mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-joker-red block mb-1">
            Wholesale Favorites
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-joker-charcoal tracking-tight uppercase">
            Top 3 Joker Golisoda Sellers
          </h2>
        </div>

        {/* 3 Compact Horizontal Bright-Colored Cards */}
        <div className="space-y-3.5 sm:space-y-4">
          {top3Sellers.map((item) => (
            <div
              key={item.rank}
              onClick={() => setSelectedFlavour(item)}
              style={{ backgroundColor: item.cardBg }}
              className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 overflow-hidden select-none"
            >
              {/* Inset dashed decorative inner border */}
              <div className="absolute inset-2.5 rounded-xl sm:rounded-2xl border border-dashed border-white/30 pointer-events-none" />

              {/* Lighter quarter-circle backdrop */}
              <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full bg-white/15 pointer-events-none transition-transform duration-500 group-hover:scale-110" />

              {/* Left Column: Badging & Bold Letters */}
              <div className="relative z-10 flex-1 min-w-0 text-left w-full sm:w-auto">
                {/* Badging Row */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {renderBadge(item.rankNumber)}

                  <span className="text-[10px] font-bold text-white/90 bg-black/20 backdrop-blur-sm px-2 py-0.5 rounded-full uppercase tracking-wider">
                    200ml Glass
                  </span>
                </div>

                {/* Bold Letters Flavour Name */}
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase leading-none drop-shadow-sm mb-1.5">
                  {item.name}
                </h3>

                {/* Subtitle */}
                <p className="text-white/90 text-xs sm:text-sm font-medium max-w-md mb-3 line-clamp-1">
                  {item.subName} • {item.tagline}
                </p>

                {/* Compact Action Link */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-stone-900 font-bold text-[11px] uppercase tracking-wider transition-all shadow-sm">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Right Column: Bottle Image (Sleek, Proportional Size) */}
              <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-full sm:w-36 h-32 sm:h-36">
                <img
                  src={item.bottleImage}
                  alt={item.name}
                  loading="lazy"
                  className="h-32 sm:h-36 w-auto object-contain drop-shadow-xl group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-500 pointer-events-none"
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
