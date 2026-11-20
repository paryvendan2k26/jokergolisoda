import React from 'react';

/**
 * Compact, clean product card for responsive grid
 * Features:
 * - Bold solid background color
 * - Thin, inset dashed inner border
 * - Top-left white scalloped starburst badge displaying year
 * - Top-right 300ml pill badge
 * - Bottle image cutout with drop shadow
 * - Clean title and subtitle typography
 */
export default function FlavourCard({ flavour, onSelect }) {
  const scallopPath =
    "M 56.00 32.00 Q 60.44 37.66 54.17 41.18 Q 56.11 48.11 48.97 48.97 Q 48.11 56.11 41.18 54.17 Q 37.66 60.44 32.00 56.00 Q 26.34 60.44 22.82 54.17 Q 15.89 56.11 15.03 48.97 Q 7.89 48.11 9.83 41.18 Q 3.56 37.66 8.00 32.00 Q 3.56 26.34 9.83 22.82 Q 7.89 15.89 15.03 15.03 Q 15.89 7.89 22.82 9.83 Q 26.34 3.56 32.00 8.00 Q 37.66 3.56 41.18 9.83 Q 48.11 7.89 48.97 15.03 Q 56.11 15.89 54.17 22.82 Q 60.44 26.34 56.00 32.00 Z";

  return (
    <div
      onClick={() => onSelect(flavour)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(flavour);
        }
      }}
      className="group relative w-full h-[260px] sm:h-[285px] md:h-[310px] rounded-2xl sm:rounded-3xl cursor-pointer select-none overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl flex flex-col justify-between p-3.5 sm:p-4"
      style={{ backgroundColor: flavour.cardBg }}
      aria-label={`View ${flavour.name}`}
    >
      {/* Decorative quarter-circle in bottom right */}
      <div
        className="absolute -bottom-8 -right-8 w-36 h-36 sm:w-44 sm:h-44 rounded-full pointer-events-none transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundColor: flavour.quarterCircleBg || 'rgba(255, 255, 255, 0.18)' }}
      />

      {/* Inset dashed inner border */}
      <div className="absolute inset-2 sm:inset-2.5 rounded-xl sm:rounded-2xl border border-dashed border-white/40 pointer-events-none z-10" />

      {/* Top Row: Scalloped Starburst Badge displaying Year & Volume Pill */}
      <div className="relative z-20 flex items-start justify-between">
        <svg
          viewBox="0 0 64 64"
          className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:rotate-12 drop-shadow-sm flex-shrink-0"
        >
          <path d={scallopPath} fill="#FFFFFF" />
          <text
            x="32"
            y="37"
            fontFamily="Outfit, Inter, sans-serif"
            fontSize="12"
            fontWeight="900"
            fill={flavour.accentColor || flavour.cardBg}
            textAnchor="middle"
            letterSpacing="-0.5px"
          >
            {flavour.year || '2026'}
          </text>
        </svg>

        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white/90 bg-black/25 backdrop-blur-sm px-2 py-0.5 rounded-full">
          300ml
        </span>
      </div>

      {/* Realistic Product Cutout layered on right */}
      <div className="absolute right-0 sm:right-1 -bottom-2 sm:-bottom-3 z-20 pointer-events-none">
        <img
          src={flavour.bottleImage}
          alt={flavour.name}
          loading="lazy"
          decoding="async"
          className="h-[180px] sm:h-[200px] md:h-[225px] w-auto object-contain filter drop-shadow-[0_10px_16px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2"
        />
      </div>

      {/* Bottom-left: Clean White Typography Stack */}
      <div className="relative z-20 max-w-[58%] flex flex-col items-start text-left pointer-events-none">
        <h3 className="text-sm sm:text-base md:text-lg font-black text-white uppercase tracking-tight leading-tight drop-shadow-sm">
          {flavour.name}
        </h3>
        {flavour.subName && (
          <p className="text-[10px] sm:text-xs font-semibold text-white/85 line-clamp-1 mt-0.5 drop-shadow-sm">
            {flavour.subName}
          </p>
        )}
      </div>
    </div>
  );
}
