import React from 'react';

export default function Founders() {
  const founders = [
    {
      name: 'Parvendan R',
      role: 'Founder & Managing Director',
      company: 'Dhanvin Foods',
      initials: 'PR',
      accentColor: '#C9232B',
    },
    {
      name: 'Dhanvin Raj',
      role: 'Co-Founder & Head of Operations',
      company: 'Dhanvin Foods',
      initials: 'DR',
      accentColor: '#1A1A1A',
    },
  ];

  return (
    <section
      id="founders"
      className="py-20 sm:py-24 bg-white border-b border-stone-200/80"
      aria-label="Founders"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Simple Bold Heading */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-joker-charcoal tracking-tight uppercase">
            Joker Golisoda Founders
          </h2>
        </div>

        {/* Clean Founders Cards: Just Name & Designation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="bg-joker-cream rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Monogram Badge */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-md mb-6"
                style={{ backgroundColor: founder.accentColor }}
              >
                {founder.initials}
              </div>

              {/* Name in Bold Letters */}
              <h3 className="text-2xl sm:text-3xl font-black text-joker-charcoal tracking-tight mb-2 uppercase">
                {founder.name}
              </h3>

              {/* Designation */}
              <p className="text-base sm:text-lg font-bold text-joker-red mb-1">
                {founder.role}
              </p>

              {/* Company */}
              <span className="text-xs sm:text-sm text-stone-500 font-semibold tracking-wide">
                {founder.company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
