import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, Navigation, Clock, Package, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { companyDetails } from '../data/flavours';

export default function ContactSection() {
  const [selectedTier, setSelectedTier] = useState('25 – 50 Crates');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const crateTiers = [
    '10 – 25 Crates',
    '25 – 50 Crates',
    '100+ Crates',
    'Dealership Inquiry'
  ];

  const prefilledWhatsApp = `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(
    `Hello Joker Golisoda, I would like to order fresh crates (${selectedTier}). Please share the wholesale rate card.`
  )}`;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            phone_number: formData.phone,
            location: formData.location,
            crate_tier: selectedTier,
            message: formData.message || `Requirement: ${selectedTier}`,
            reply_to: companyDetails.email
          },
          publicKey
        );
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
        console.log('Enquiry submitted:', { ...formData, crateTier: selectedTier });
      }

      setSubmitted(true);
      confetti({
        particleCount: 35,
        spread: 55,
        origin: { y: 0.8 },
        colors: ['#C9232B', '#E0363F', '#F7F0E5']
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-stone-50/60 border-b border-stone-200/80" aria-label="Wholesale Orders">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <span className="text-[11px] font-bold uppercase tracking-widest text-joker-red block mb-2">
            Wholesale Supply & Inquiries
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-joker-charcoal tracking-tight uppercase">
            Order Joker Golisoda
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 font-normal max-w-xl mx-auto">
            Direct dispatch from our bottling plant to retailers, supermarkets, and distributors. Minimum order quantity: 10 crates (240 bottles).
          </p>
        </div>

        {/* 2-Column Minimal Aesthetic Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-16">
          {/* Left Column: Direct Factory Desk & Wholesale Specs */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              {/* Online Dispatch Status Dot */}
              <div className="flex items-center gap-2.5 mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Factory Dispatch Active
                </span>
              </div>

              {/* Direct Call Number */}
              <div className="mb-6">
                <span className="text-[11px] uppercase font-bold text-stone-400 tracking-wider block mb-1">
                  Wholesale Hotline
                </span>
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="text-2xl sm:text-3xl lg:text-4xl font-black text-joker-charcoal hover:text-joker-red transition-colors tracking-tight font-mono block"
                >
                  {companyDetails.phoneFormatted}
                </a>
              </div>

              {/* Quick WhatsApp Action */}
              <div className="mb-8">
                <a
                  href={prefilledWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Wholesale Specifications Minimal Cards */}
              <div className="grid grid-cols-2 gap-3 mb-8 pt-6 border-t border-stone-100">
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-100">
                  <div className="flex items-center gap-2 mb-1 text-stone-700">
                    <Package className="w-4 h-4 text-joker-red" />
                    <span className="text-xs font-bold">Standard Crate</span>
                  </div>
                  <span className="text-[11px] text-stone-500 font-medium block">
                    24 Glass Bottles (200ml)
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-100">
                  <div className="flex items-center gap-2 mb-1 text-stone-700">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold">Dispatch Time</span>
                  </div>
                  <span className="text-[11px] text-stone-500 font-medium block">
                    24 – 48 Hours Delivery
                  </span>
                </div>
              </div>
            </div>

            {/* Factory Address */}
            <div className="pt-6 border-t border-stone-100 flex items-start gap-3">
              <MapPin className="w-4 h-4 text-joker-red flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-0.5">
                  Bottling Plant Address
                </span>
                <p className="text-xs text-stone-600 font-medium leading-relaxed">
                  {companyDetails.factoryAddress}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Aesthetic Minimal Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-joker-charcoal uppercase tracking-tight">
                    Wholesale Inquiry
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Select your estimated volume and share your contact details.
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-amber-500" />
              </div>

              {submitted ? (
                <div className="py-12 px-6 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h4 className="text-xl font-black text-stone-900 mb-1">Inquiry Received</h4>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto mb-6">
                    Our factory dispatch desk has received your request and will call you with the wholesale rate card shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-full bg-stone-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Crate Quantity Selector Pills */}
                  <div>
                    <label className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-2">
                      Estimated Volume
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {crateTiers.map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setSelectedTier(tier)}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center border ${
                            selectedTier === tier
                              ? 'bg-joker-charcoal text-white border-joker-charcoal shadow-sm'
                              : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-1.5">
                        Your Name / Shop Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Anand Stores"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 hover:bg-stone-100/70 focus:bg-white border border-stone-200 focus:border-joker-charcoal text-sm font-semibold text-stone-900 placeholder:text-stone-400 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 hover:bg-stone-100/70 focus:bg-white border border-stone-200 focus:border-joker-charcoal text-sm font-semibold text-stone-900 placeholder:text-stone-400 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Location & Message */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-1.5">
                        Delivery City / Town
                      </label>
                      <input
                        type="text"
                        name="location"
                        required
                        placeholder="e.g. Chennai, Madurai, Coimbatore"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 hover:bg-stone-100/70 focus:bg-white border border-stone-200 focus:border-joker-charcoal text-sm font-semibold text-stone-900 placeholder:text-stone-400 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-1.5">
                        Preferred Flavours / Note
                      </label>
                      <input
                        type="text"
                        name="message"
                        placeholder="e.g. Paneer, Orange, Mango"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 hover:bg-stone-100/70 focus:bg-white border border-stone-200 focus:border-joker-charcoal text-sm font-semibold text-stone-900 placeholder:text-stone-400 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-joker-red hover:bg-joker-red-dark text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? 'Submitting Inquiry...' : 'Request Wholesale Rate Card'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Embedded Minimalist Factory Map Card */}
        <div className="w-full rounded-3xl overflow-hidden border border-stone-200 shadow-sm bg-white">
          <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-joker-red flex-shrink-0" />
              <div>
                <span className="text-xs font-bold text-joker-charcoal uppercase tracking-wider block">
                  Dhanvin Foods Bottling Plant
                </span>
                <span className="text-[11px] text-stone-500">
                  {companyDetails.factoryAddress}
                </span>
              </div>
            </div>

            <a
              href={companyDetails.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors self-start sm:self-auto"
            >
              <Navigation className="w-3.5 h-3.5 text-joker-red" />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="relative w-full h-[300px] sm:h-[360px]">
            <iframe
              title="Joker Golisoda Factory Location"
              src="https://maps.google.com/maps?q=Food+Processing+Industrial+Estate,+Chennai,+Tamil+Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
