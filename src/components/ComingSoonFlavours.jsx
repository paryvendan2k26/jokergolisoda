import React from 'react';
import { comingSoonFlavours } from '../data/flavours';
import { Clock } from 'lucide-react';

export default function ComingSoonFlavours() {
  const scallopPath =
    "M 56.00 32.00 Q 60.44 37.66 54.17 41.18 Q 56.11 48.11 48.97 48.97 Q 48.11 56.11 41.18 54.17 Q 37.66 60.44 32.00 56.00 Q 26.34 60.44 22.82 54.17 Q 15.89 56.11 15.03 48.97 Q 7.89 48.11 9.83 41.18 Q 3.56 37.66 8.00 32.00 Q 3.56 26.34 9.83 22.82 Q 7.89 15.89 15.03 15.03 Q 15.89 7.89 22.82 9.83 Q 26.34 3.56 32.00 8.00 Q 37.66 3.56 41.18 9.83 Q 48.11 7.89 48.97 15.03 Q 56.11 15.89 54.17 22.82 Q 60.44 26.34 56.00 32.00 Z";

  return (
    <section
      id="coming-soon"
      className="py-16 sm:py-20 bg-white border-b border-stone-200/80 relative overflow-hidden"
      aria-label="Coming Soon Flavours"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-joker-charcoal tracking-tight uppercase">
            Coming Soon Flavours
          </h2>

          <p className="text-stone-500 text-sm sm:text-base mt-1 font-normal">
            8 upcoming flavours currently being perfected in our Hosur laboratory.
          </p>
        </div>

        {/* 8 Flavours Clean Minimal Compact Grid: 2 per row on mobile, 4 per row on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {comingSoonFlavours.map((item) => (
            <div
              key={item.id}
              style={{ backgroundColor: item.cardBg }}
              className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-5 text-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden select-none min-h-[160px] sm:min-h-[180px]"
            >
              {/* Quarter-circle decorative backdrop */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/15 pointer-events-none transition-transform duration-500 group-hover:scale-110" />

              {/* Thin dashed inner border */}
              <div className="absolute inset-2 sm:inset-2.5 rounded-xl sm:rounded-2xl border border-dashed border-white/35 pointer-events-none z-10" />

              {/* Top Row: Year Scallop & Coming Soon Badge */}
              <div className="relative z-20 flex items-start justify-between gap-2 mb-2">
                <svg
                  viewBox="0 0 64 64"
                  className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-12 drop-shadow-sm flex-shrink-0"
                >
                  <path d={scallopPath} fill="#FFFFFF" />
                  <text
                    x="32"
                    y="37"
                    fontFamily="Outfit, Inter, sans-serif"
                    fontSize="12"
                    fontWeight="900"
                    fill={item.accentColor || '#C9232B'}
                    textAnchor="middle"
                    letterSpacing="-0.5px"
                  >
                    {item.year || '2026'}
                  </text>
                </svg>

                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/25 backdrop-blur-sm border border-white/20 text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>Coming Soon</span>
                </div>
              </div>

              {/* Category & Title */}
              <div className="relative z-20 flex-1 flex flex-col justify-center my-1">
                {item.category && (
                  <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-white/70 block mb-0.5">
                    {item.category}
                  </span>
                )}

                <h3 className="text-base sm:text-lg md:text-xl font-black text-white uppercase tracking-tight leading-snug drop-shadow-sm">
                  {item.name}
                </h3>
              </div>

              {/* Bottom Spec Badge */}
              <div className="relative z-20 pt-2 border-t border-white/15 flex items-center justify-between">
                <div className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-white/90">
                  <Clock className="w-3 h-3 text-amber-300" />
                  <span>300ML</span>
                </div>
                <span className="text-[10px] font-black text-white/90 bg-white/15 px-2 py-0.5 rounded">
                  ₹35 MRP
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
