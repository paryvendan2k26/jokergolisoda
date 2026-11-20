import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { foundersList } from '../data/flavours';

export default function Founders() {
  return (
    <section
      id="founders"
      className="py-20 sm:py-24 bg-white border-b border-stone-200/80"
      aria-label="Founders & Leadership"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Simple Bold Heading */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-joker-red block mb-2">
            Leadership & Executive Team
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-joker-charcoal tracking-tight uppercase">
            Joker Golisoda Founders
          </h2>
        </div>

        {/* Clean Founders Cards: 3 Column Layout for the 3 Leaders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {foundersList.map((founder, idx) => (
            <div
              key={idx}
              className="bg-joker-cream rounded-3xl p-7 sm:p-8 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between group"
            >
              <div className="flex flex-col items-center">
                {/* Monogram Badge */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-md mb-6 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: founder.accentColor }}
                >
                  {founder.initials}
                </div>

                {/* Name in Bold Letters */}
                <h3 className="text-xl sm:text-2xl font-black text-joker-charcoal tracking-tight mb-1.5 uppercase">
                  {founder.name}
                </h3>

                {/* Designation */}
                <p className="text-sm sm:text-base font-bold text-joker-red mb-1">
                  {founder.role}
                </p>

                {/* Company */}
                <span className="text-xs text-stone-500 font-semibold tracking-wide block mb-6">
                  {founder.company}
                </span>
              </div>

              {/* Direct Call / WhatsApp Buttons if available */}
              {founder.phone && (
                <div className="w-full pt-4 border-t border-stone-200/80 flex items-center justify-center gap-2">
                  <a
                    href={`tel:${founder.phone}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-white hover:bg-stone-100 text-stone-800 text-xs font-bold border border-stone-300 shadow-sm transition-all"
                    title={`Call ${founder.name}`}
                  >
                    <Phone className="w-3.5 h-3.5 text-joker-red" />
                    <span>Call</span>
                  </a>

                  {founder.whatsapp && (
                    <a
                      href={`https://wa.me/${founder.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all"
                      title={`WhatsApp ${founder.name}`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
