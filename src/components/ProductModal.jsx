import React, { useEffect } from 'react';
import { X, MessageCircle, Phone } from 'lucide-react';
import { companyDetails } from '../data/flavours';

export default function ProductModal({ flavour, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!flavour) return null;

  const prefilledWhatsApp = `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(
    `Hello Joker Golisoda, I would like to order "${flavour.name}". Please share details.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200 text-center overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Flavour Title & Quote */}
        <h3 className="text-2xl sm:text-3xl font-black text-stone-900 mb-1">
          {flavour.name}
        </h3>
        <p className="text-xs sm:text-sm text-stone-500 italic mb-6">
          "{flavour.tagline}"
        </p>

        {/* Bottle Image */}
        <div
          className="rounded-2xl p-6 mb-6 flex items-center justify-center"
          style={{ backgroundColor: flavour.bgColor || '#FAF6F0' }}
        >
          <img
            src={flavour.bottleImage}
            alt={flavour.name}
            className="h-64 sm:h-72 w-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* Short Description */}
        <p className="text-sm text-stone-600 leading-relaxed mb-6 font-normal">
          {flavour.shortDescription}
        </p>

        <div className="text-xs text-stone-500 font-medium mb-6">
          Standard 200 ml Glass Codd Bottle • 24 Bottles per Crate
        </div>

        {/* Clean Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href={prefilledWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order on WhatsApp</span>
          </a>

          <a
            href={`tel:${companyDetails.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm transition-colors border border-stone-300"
          >
            <Phone className="w-4 h-4 text-joker-red" />
            <span>Call Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}
