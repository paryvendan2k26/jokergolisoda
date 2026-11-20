import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { companyDetails } from '../data/flavours';

export default function Footer() {
  return (
    <footer className="bg-joker-charcoal text-white py-14 border-t border-stone-800 text-center">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        {/* Brand Logo */}
        <a href="#" className="inline-block mb-4 group" aria-label="Joker Golisoda Home">
          <img
            src="/assets/joker-official-logo.png"
            alt="Joker Golisoda"
            className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Tagline */}
        <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-6">
          {companyDetails.tagline}
        </p>

        {/* Contact Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-stone-300 mb-8 pb-6 border-b border-stone-800/80 w-full">
          <a
            href={`tel:${companyDetails.phone}`}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-joker-red" />
            <span>{companyDetails.phoneFormatted} (Hotline)</span>
          </a>

          <a
            href={`tel:${companyDetails.secondaryPhone}`}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>{companyDetails.secondaryPhoneFormatted} (Plant)</span>
          </a>

          <a
            href={`mailto:${companyDetails.email}`}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>{companyDetails.email}</span>
          </a>

          <a
            href={companyDetails.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>Instagram: @{companyDetails.instagramHandle}</span>
          </a>

          <a
            href={companyDetails.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>Facebook: {companyDetails.facebookHandle}</span>
          </a>
        </div>

        {/* Plant Address */}
        <div className="flex items-center justify-center gap-2 text-xs text-stone-400 mb-6 max-w-md">
          <MapPin className="w-4 h-4 text-joker-red flex-shrink-0" />
          <span>{companyDetails.factoryAddress}</span>
        </div>

        {/* Copyright */}
        <div className="text-[11px] text-stone-500">
          © {companyDetails.established} {companyDetails.parentCompany}. All rights reserved. Brand: <strong>{companyDetails.brandName}</strong>.
        </div>
      </div>
    </footer>
  );
}
