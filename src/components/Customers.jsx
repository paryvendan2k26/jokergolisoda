import React from 'react';
import { Truck, MessageCircle, Phone } from 'lucide-react';
import { companyDetails } from '../data/flavours';

export default function Customers() {
  return (
    <section className="py-14 bg-white border-b border-stone-200/80 text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50 text-joker-red mb-4">
          <Truck className="w-6 h-6" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-joker-charcoal mb-2">
          Direct Batch Delivery
        </h2>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl mx-auto mb-6">
          Just order. We deliver fresh batches of Joker Golisoda directly to your retail store, supermarket, restaurant, or event.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href={`https://wa.me/${companyDetails.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order on WhatsApp</span>
          </a>
          <a
            href={`tel:${companyDetails.phone}`}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-semibold border border-stone-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-joker-red" />
            <span>{companyDetails.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
