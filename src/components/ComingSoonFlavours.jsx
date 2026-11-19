import React from 'react';
import { comingSoonFlavours, companyDetails } from '../data/flavours';
import { Sparkles, MessageCircle, Clock, ArrowRight } from 'lucide-react';

export default function ComingSoonFlavours() {
  const scallopPath =
    "M 56.00 32.00 Q 60.44 37.66 54.17 41.18 Q 56.11 48.11 48.97 48.97 Q 48.11 56.11 41.18 54.17 Q 37.66 60.44 32.00 56.00 Q 26.34 60.44 22.82 54.17 Q 15.89 56.11 15.03 48.97 Q 7.89 48.11 9.83 41.18 Q 3.56 37.66 8.00 32.00 Q 3.56 26.34 9.83 22.82 Q 7.89 15.89 15.03 15.03 Q 15.89 7.89 22.82 9.83 Q 26.34 3.56 32.00 8.00 Q 37.66 3.56 41.18 9.83 Q 48.11 7.89 48.97 15.03 Q 56.11 15.89 54.17 22.82 Q 60.44 26.34 56.00 32.00 Z";

  return (
    <section
      id="coming-soon"
      className="py-20 sm:py-24 bg-white border-b border-stone-200/80 relative overflow-hidden"
      aria-label="Coming Soon Flavours"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-joker-red/10 text-joker-red text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>8 New Flavours</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-joker-charcoal tracking-tight uppercase">
            Coming Soon Flavours
          </h2>

          <p className="text-stone-500 text-sm sm:text-base mt-2 font-normal">
            8 exciting flavours from the Joker Golisoda collection.
          </p>
        </div>

        {/* 8 Flavours Clean Minimal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {comingSoonFlavours.map((item) => {
            const prefill = `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(
              `Hello Joker Golisoda, I would like to inquire about the upcoming flavour "${item.name}". Please share launch updates.`
            )}`;

            return (
              <div
                key={item.id}
                style={{ backgroundColor: item.cardBg }}
                className="group relative rounded-3xl p-6 text-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden select-none min-h-[260px]"
              >
                {/* Quarter-circle decorative backdrop */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/15 pointer-events-none transition-transform duration-500 group-hover:scale-110" />

                {/* Thin dashed inner border */}
                <div className="absolute inset-3 rounded-2xl border border-dashed border-white/40 pointer-events-none z-10" />

                {/* Top Row: Year Scallop & Coming Soon Badge */}
                <div className="relative z-20 flex items-start justify-between gap-2 mb-4">
                  <svg
                    viewBox="0 0 64 64"
                    className="w-10 h-10 transition-transform duration-300 group-hover:rotate-12 drop-shadow-sm flex-shrink-0"
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
                      {item.year}
                    </text>
                  </svg>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-[10px] font-black uppercase tracking-wider text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>Coming Soon</span>
                  </div>
                </div>

                {/* Category & Title */}
                <div className="relative z-20 flex-1 flex flex-col justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/75 block mb-1">
                      {item.category}
                    </span>

                    <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-tight">
                      {item.name}
                    </h3>
                  </div>

                  <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/90 bg-white/15 px-2.5 py-1 rounded-lg self-start">
                    <Clock className="w-3 h-3 text-amber-300" />
                    <span>300ML • ₹30/35</span>
                  </div>
                </div>

                {/* Bottom Action: Inquire */}
                <div className="relative z-20 pt-3 border-t border-white/20">
                  <a
                    href={prefill}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-full bg-white hover:bg-stone-100 text-stone-900 font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:scale-[1.02] active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3 text-stone-500" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
