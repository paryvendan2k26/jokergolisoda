import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { companyDetails } from '../data/flavours';

/**
 * Mobile-only sticky bottom action bar
 * - Fixed at bottom spanning full screen width
 * - Two equal-width buttons:
 *     1. WhatsApp (left, light green)
 *     2. Call Now (right, dark green)
 * - Rounded styling, white text, respective icons
 * - Only visible on mobile screens (< 768px: md:hidden)
 */
export default function MobileActionBar() {
  return (
    <aside
      className="fixed bottom-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-t border-stone-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.12)] px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] md:hidden"
      aria-label="Quick Mobile Actions"
    >
      <div className="flex items-center gap-2.5 w-full max-w-md mx-auto">
        {/* Left: WhatsApp (Light Green) */}
        <a
          href={`https://wa.me/${companyDetails.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white font-black text-sm tracking-wide uppercase shadow-md shadow-[#25D366]/30 transition-all select-none"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white text-[#25D366] stroke-[2.5]" />
          <span>WhatsApp</span>
        </a>

        {/* Right: Call Now (Dark Green) */}
        <a
          href={`tel:${companyDetails.phone}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#075E54] hover:bg-[#054c44] active:scale-95 text-white font-black text-sm tracking-wide uppercase shadow-md shadow-[#075E54]/30 transition-all select-none"
          aria-label="Call Wholesale Hotline Now"
        >
          <Phone className="w-4 h-4 fill-white text-[#075E54] stroke-[2.5]" />
          <span>Call Now</span>
        </a>
      </div>
    </aside>
  );
}
