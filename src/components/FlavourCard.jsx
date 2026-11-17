import React from 'react';

/**
 * Vertical rounded-corner product card
 * Features:
 * - Bold solid background color
 * - Thin, inset dashed inner border
 * - Top-left white scalloped starburst badge displaying year in card's accent color
 * - Bottom-right subtle lighter-toned quarter-circle backdrop
 * - Realistic product cutout slightly overlapping the bottom edge
 * - Bottom-left stacked typography: bold title, short subtitle, and dark translucent badge
 */
export default function FlavourCard({ flavour, onSelect }) {
  // 16-lobed smooth scalloped rosette path
  const scallopPath = "M 56.00 32.00 Q 60.44 37.66 54.17 41.18 Q 56.11 48.11 48.97 48.97 Q 48.11 56.11 41.18 54.17 Q 37.66 60.44 32.00 56.00 Q 26.34 60.44 22.82 54.17 Q 15.89 56.11 15.03 48.97 Q 7.89 48.11 9.83 41.18 Q 3.56 37.66 8.00 32.00 Q 3.56 26.34 9.83 22.82 Q 7.89 15.89 15.03 15.03 Q 15.89 7.89 22.82 9.83 Q 26.34 3.56 32.00 8.00 Q 37.66 3.56 41.18 9.83 Q 48.11 7.89 48.97 15.03 Q 56.11 15.89 54.17 22.82 Q 60.44 26.34 56.00 32.00 Z";

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
      className="group relative w-[300px] sm:w-[320px] h-[460px] sm:h-[480px] flex-shrink-0 cursor-pointer select-none transition-transform duration-300 hover:-translate-y-2"
      aria-label={`View ${flavour.name}`}
    >
      {/* Solid Rounded Card Container with clipped background effects */}
      <div
        className="absolute inset-0 rounded-[32px] overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
        style={{ backgroundColor: flavour.cardBg }}
      >
        {/* Bottom-right subtle lighter-toned quarter-circle backdrop */}
        <div
          className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full pointer-events-none"
          style={{ backgroundColor: flavour.quarterCircleBg || 'rgba(255, 255, 255, 0.18)' }}
        />

        {/* Thin, inset dashed inner border */}
        <div className="absolute inset-3.5 sm:inset-4 rounded-[22px] border border-dashed border-white/50 pointer-events-none z-10" />
      </div>

      {/* Top-left: White Scalloped Starburst Badge displaying the year */}
      <div className="absolute top-6 left-6 z-20 drop-shadow-md">
        <svg
          viewBox="0 0 64 64"
          className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:rotate-12"
        >
          {/* White scalloped starburst rosette */}
          <path d={scallopPath} fill="#FFFFFF" />
          {/* Year in card's primary accent color */}
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
      </div>

      {/* Realistic Product Cutout layered in front of the quarter-circle, slightly overlapping the bottom edge */}
      <div className="absolute right-1 sm:right-2 -bottom-3 sm:-bottom-4 z-20 pointer-events-none">
        <img
          src={flavour.bottleImage}
          alt={flavour.name}
          loading="lazy"
          className="h-[340px] sm:h-[365px] w-auto object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
        />
      </div>

      {/* Bottom-left: Clean White Sans-Serif Typography Stack */}
      <div className="absolute bottom-7 left-7 z-20 max-w-[55%] flex flex-col items-start text-left pointer-events-none">
        {/* Bold Product Title */}
        <h3 className="text-2xl sm:text-[28px] font-black text-white uppercase tracking-tight leading-none drop-shadow-sm">
          {flavour.name}
        </h3>

        {/* Short Subtitle */}
        <p className="text-xs sm:text-sm font-semibold text-white/90 leading-tight mt-1.5 drop-shadow-sm">
          {flavour.subName || flavour.tagline}
        </p>

        {/* Dark Translucent Rectangular Badge with small uppercase text */}
        <div className="mt-3 px-2.5 py-1 rounded bg-black/40 backdrop-blur-sm border border-white/15 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
          {flavour.badgeText || '200ML • CODD BOTTLE'}
        </div>
      </div>
    </div>
  );
}
