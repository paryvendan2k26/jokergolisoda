import React from 'react';
import { companyDetails } from '../data/flavours';

export default function Footer() {
  return (
    <footer className="bg-joker-charcoal text-white py-12 border-t border-stone-800 text-center">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <img
          src="/assets/logo-white.png"
          alt="Joker Golisoda"
          className="h-9 w-auto object-contain mb-4"
        />

        <p className="text-stone-400 text-xs sm:text-sm max-w-md mb-6">
          Traditional Indian Marble Soda manufactured by <strong>{companyDetails.parentCompany}</strong>.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400 mb-8">
          <a href="#flavours" className="hover:text-white transition-colors">Flavours</a>
          <a href="#manufacturing" className="hover:text-white transition-colors">Bottling Unit</a>
          <a href="#licenses" className="hover:text-white transition-colors">Licenses</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href={`tel:${companyDetails.phone}`} className="hover:text-white transition-colors">{companyDetails.phoneFormatted}</a>
        </div>

        <div className="text-[11px] text-stone-500">
          © {companyDetails.established} {companyDetails.parentCompany}. All rights reserved. Brand: <strong>{companyDetails.brandName}</strong>.
        </div>
      </div>
    </footer>
  );
}
