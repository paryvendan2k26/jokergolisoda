import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { companyDetails } from '../data/flavours';

export default function Footer() {
  return (
    <footer className="bg-joker-charcoal text-white py-14 sm:py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Side: Brand Logo, Slogan, Social / Contact Icons & Copyright */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Brand Logo & Name */}
            <a href="/" className="inline-flex items-center gap-3 mb-3 group" aria-label="Joker Golisoda Home">
              <img
                src="/assets/joker-official-logo.png"
                alt="Joker Golisoda"
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-black text-xl tracking-tight text-white uppercase">
                {companyDetails.brandName}
              </span>
            </a>

            {/* Brand Slogan */}
            <p className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-6">
              {companyDetails.tagline}
            </p>

            {/* Stylized Contact & Social Logos Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
              {/* 1. Phone Hotline */}
              <a
                href={`tel:${companyDetails.phone}`}
                title="Call Wholesale Hotline"
                aria-label="Call Wholesale Hotline"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-stone-900 border border-stone-700/80 hover:border-joker-red hover:bg-joker-red/15 text-stone-300 hover:text-joker-red transition-all duration-300 hover:scale-105 shadow-md flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* 2. Phone Plant */}
              <a
                href={`tel:${companyDetails.secondaryPhone}`}
                title="Call Factory & Plant Operations"
                aria-label="Call Factory & Plant Operations"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-stone-900 border border-stone-700/80 hover:border-amber-500 hover:bg-amber-500/15 text-stone-300 hover:text-amber-400 transition-all duration-300 hover:scale-105 shadow-md flex items-center justify-center group"
              >
                <svg
                  className="w-5 h-5 fill-none stroke-current stroke-2 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                  <path d="M14.05 6A5 5 0 0 1 18 10" />
                </svg>
              </a>

              {/* 3. WhatsApp */}
              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                aria-label="Chat on WhatsApp"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-stone-900 border border-stone-700/80 hover:border-[#25D366] hover:bg-[#25D366]/15 text-stone-300 hover:text-[#25D366] transition-all duration-300 hover:scale-105 shadow-md flex items-center justify-center group"
              >
                <svg
                  className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>

              {/* 4. Email */}
              <a
                href={`mailto:${companyDetails.email}`}
                title="Email Dhanvin Foods"
                aria-label="Email Dhanvin Foods"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-stone-900 border border-stone-700/80 hover:border-emerald-400 hover:bg-emerald-400/15 text-stone-300 hover:text-emerald-400 transition-all duration-300 hover:scale-105 shadow-md flex items-center justify-center group"
              >
                <Mail className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* 5. Instagram */}
              <a
                href={companyDetails.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram: @jokergolisoda"
                aria-label="Follow Joker Golisoda on Instagram"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-stone-900 border border-stone-700/80 hover:border-pink-500 hover:bg-pink-500/15 text-stone-300 hover:text-pink-400 transition-all duration-300 hover:scale-105 shadow-md flex items-center justify-center group"
              >
                <svg
                  className="w-5 h-5 fill-none stroke-current stroke-2 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* 6. Facebook */}
              <a
                href={companyDetails.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook: Jokers Golisoda"
                aria-label="Follow Joker Golisoda on Facebook"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-stone-900 border border-stone-700/80 hover:border-blue-500 hover:bg-blue-500/15 text-stone-300 hover:text-blue-500 transition-all duration-300 hover:scale-105 shadow-md flex items-center justify-center group"
              >
                <svg
                  className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-[11px] text-stone-500">
              © {companyDetails.established} {companyDetails.parentCompany}. All rights reserved. Brand: <strong>{companyDetails.brandName}</strong>.
            </div>
          </div>

          {/* Right Side: Location / Manufacturing Plant Address */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end text-center lg:text-right pt-6 lg:pt-0 border-t lg:border-t-0 border-stone-800">
            <span className="text-xs font-bold uppercase tracking-widest text-joker-red block mb-2">
              Plant Location & Dispatch
            </span>

            <p className="text-sm font-semibold text-white mb-2 max-w-sm">
              {companyDetails.parentCompany}
            </p>

            <div className="flex items-start justify-center lg:justify-end gap-2 text-xs text-stone-400 mb-4 max-w-sm">
              <MapPin className="w-4 h-4 text-joker-red flex-shrink-0 mt-0.5" />
              <span>{companyDetails.factoryAddress}</span>
            </div>

            {/* View on Google Maps Button */}
            <a
              href={companyDetails.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-joker-red text-xs font-bold transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              <MapPin className="w-3.5 h-3.5 text-joker-red flex-shrink-0" />
              <span>Open in Google Maps →</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
