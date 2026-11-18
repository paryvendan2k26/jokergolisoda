import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  const [selectedImg, setSelectedImg] = useState(null);

  const licenses = [
    {
      name: 'FSSAI Statutory License',
      licenseNumber: '12426008000862',
      label: 'FSSAI Lic. No',
      authority: 'Food Safety and Standards Authority of India',
      image: '/certificates/fssai8862.webp',
      category: 'Food Safety & Standards',
    },
    {
      name: 'GST Registration',
      licenseNumber: '33AAHCD4210M1Z8',
      label: 'GSTIN',
      authority: 'Department of Revenue, Ministry of Finance',
      image: '/certificates/gst-tax-red-rubber-stamp-vector-design_1089581-8019.webp',
      category: 'Goods & Services Tax',
    },
  ];

  return (
    <section id="licenses" className="py-20 sm:py-24 bg-joker-cream border-b border-stone-200/80" aria-label="Licenses">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Simple Minimal Title */}
        <span className="text-xs font-bold uppercase tracking-widest text-joker-red block mb-1">
          Government Statutory Credentials
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-joker-charcoal mb-4 tracking-tight uppercase">
          Joker Golisoda Licenses
        </h2>
        <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto mb-12 font-normal">
          Fully licensed and statutory compliant beverage manufacturing under Dhanvin Foods.
        </p>

        {/* 2 Official License Cards with License Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
          {licenses.map((lic, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(lic)}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-joker-red/40 transition-all cursor-pointer group flex flex-col items-center justify-between min-h-[320px]"
            >
              <div className="w-full flex items-center justify-between text-xs font-bold text-stone-400 mb-2">
                <span className="flex items-center gap-1 text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Statutory</span>
                </span>
                <span className="uppercase tracking-wider text-[10px] bg-stone-100 px-2 py-0.5 rounded-full">
                  {lic.category}
                </span>
              </div>

              {/* License Logo / Stamp */}
              <div className="w-full h-36 sm:h-44 flex items-center justify-center p-2 my-2">
                <img
                  src={lic.image}
                  alt={lic.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title & Distinct License Number Badge */}
              <div className="w-full text-center pt-3 border-t border-stone-100">
                <h3 className="text-base sm:text-lg font-black text-joker-charcoal group-hover:text-joker-red transition-colors mb-2">
                  {lic.name}
                </h3>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-100 group-hover:bg-red-50 border border-stone-200 group-hover:border-joker-red/30 transition-colors">
                  <span className="text-[11px] font-bold text-stone-500 uppercase">
                    {lic.label}:
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-black text-stone-900 group-hover:text-joker-red">
                    {lic.licenseNumber}
                  </span>
                </div>
              </div>
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
            className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl text-center"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-black text-stone-900 mb-1">
              {selectedImg.name}
            </h3>

            <p className="text-xs text-stone-500 mb-4">
              {selectedImg.authority}
            </p>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 flex items-center justify-center min-h-[240px] mb-4">
              <img
                src={selectedImg.image}
                alt={selectedImg.name}
                className="max-h-64 w-auto object-contain drop-shadow"
              />
            </div>

            {/* Official Registered License Number Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 border border-stone-200 text-stone-900 font-mono text-sm font-black">
              <span>{selectedImg.label}:</span>
              <span className="text-joker-red">{selectedImg.licenseNumber}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
