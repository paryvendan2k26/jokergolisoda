import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Building, ShieldCheck } from 'lucide-react';
import { companyDetails } from '../data/flavours';

export default function Founders() {
  const founders = [
    {
      name: 'Parvendan R',
      role: 'Founder & Managing Director',
      company: 'Dhanvin Foods',
      bio: 'Leading the brand vision to revive traditional Indian Codd-neck marble soda with zero artificial sweeteners. Oversees strategic wholesale expansion, retail distribution networks, and key buyer partnerships across South India.',
      email: 'parvendan@dhanvinfoods.com',
      phone: companyDetails.phone,
      initials: 'PR',
      accentColor: '#C9232B',
    },
    {
      name: 'Dhanvin Raj',
      role: 'Co-Founder & Head of Operations',
      company: 'Dhanvin Foods',
      bio: 'Directs factory bottling automation, 7-stage RO water treatment, food safety compliance, and cold-chain supply. Ensures every single batch meets rigorous carbonation pressure and statutory food standards.',
      email: 'operations@dhanvinfoods.com',
      phone: companyDetails.phone,
      initials: 'DR',
      accentColor: '#1A1A1A',
    },
  ];

  return (
    <section
      id="founders"
      className="py-20 sm:py-24 bg-white border-b border-stone-200/80"
      aria-label="Founders & Leadership"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-joker-red block mb-2">
            Leadership & Vision
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-joker-charcoal tracking-tight">
            Meet the Founders
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            The team behind Dhanvin Foods dedicated to bringing pure cane sugar marble soda to retail shelves.
          </p>
        </div>

        {/* Founders Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="bg-joker-cream rounded-3xl p-7 sm:p-9 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Monogram Avatar & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-md flex-shrink-0"
                    style={{ backgroundColor: founder.accentColor }}
                  >
                    {founder.initials}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-joker-charcoal">
                      {founder.name}
                    </h3>
                    <p className="text-sm font-bold text-joker-red">
                      {founder.role}
                    </p>
                    <span className="text-xs text-stone-500 font-medium">
                      {founder.company}
                    </span>
                  </div>
                </div>

                {/* Biography */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {founder.bio}
                </p>
              </div>

              {/* Direct Founder Contact Actions */}
              <div className="pt-6 border-t border-stone-300/70 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${founder.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-stone-100 text-stone-800 text-xs font-bold border border-stone-300 transition-colors shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5 text-joker-red" />
                  <span>{founder.email}</span>
                </a>

                <a
                  href={`tel:${founder.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-stone-100 text-stone-800 text-xs font-bold border border-stone-300 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-stone-600" />
                  <span>{founder.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Founder Direct Partnership Banner */}
        <div className="bg-joker-charcoal text-white rounded-3xl p-8 sm:p-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
              Direct Executive Contact
            </span>
            <h4 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
              Interested in Distributorship or Territory Rights?
            </h4>
            <p className="text-stone-300 text-sm max-w-xl">
              Connect directly with our founders for volume crate commitments, private labeling inquiries, or factory visit appointments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <a
              href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(
                'Hello Parvendan, I would like to discuss wholesale distributorship opportunities for Joker Golisoda.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Founder WhatsApp</span>
            </a>

            <a
              href={`tel:${companyDetails.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-stone-100 text-stone-900 font-extrabold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-joker-red" />
              <span>Direct Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
