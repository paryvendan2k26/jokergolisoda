import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function Certifications() {
  const [selectedImg, setSelectedImg] = useState(null);

  const licenses = [
    { name: 'FSSAI Statutory License', image: '/certificates/fssai8862.webp' },
    { name: 'GST Tax Registration', image: '/certificates/gst-tax-red-rubber-stamp-vector-design_1089581-8019.webp' },
  ];

  return (
    <section id="licenses" className="py-16 sm:py-20 bg-joker-cream border-b border-stone-200/80" aria-label="Licenses">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Simple Minimal Title */}
        <span className="text-xs font-bold uppercase tracking-widest text-joker-red block mb-1">
          Statutory Approvals
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-joker-charcoal mb-8 tracking-tight">
          Licenses
        </h2>

        {/* 2 Official License Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
          {licenses.map((lic, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(lic)}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-joker-red/40 transition-all cursor-pointer group flex flex-col items-center justify-center min-h-[260px] sm:min-h-[300px]"
            >
              <div className="w-full h-44 sm:h-52 flex items-center justify-center p-2">
                <img
                  src={lic.image}
                  alt={lic.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="mt-4 text-sm font-extrabold text-joker-charcoal group-hover:text-joker-red transition-colors">
                {lic.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Fullscreen Preview */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedImg(null)}
          role="dialog"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl text-center"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-black text-stone-900 mb-4">
              {selectedImg.name}
            </h3>

            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 flex items-center justify-center min-h-[260px]">
              <img
                src={selectedImg.image}
                alt={selectedImg.name}
                className="max-h-72 w-auto object-contain drop-shadow"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
