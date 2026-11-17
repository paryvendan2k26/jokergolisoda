import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, Navigation } from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { companyDetails } from '../data/flavours';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const prefilledWhatsApp = `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(
    `Hello Joker Golisoda, I would like to place an order / inquire about soda delivery.`
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
            message: formData.message,
            reply_to: companyDetails.email
          },
          publicKey
        );
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
        console.log('Enquiry submitted:', formData);
      }

      setSubmitted(true);
      confetti({
        particleCount: 40,
        spread: 60,
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
    <section id="contact" className="py-20 bg-white" aria-label="Contact and Orders">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-12">
          {/* Left: Quick Direct Ordering */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-black text-joker-charcoal tracking-tight mb-2 uppercase">
              Order Joker Golisoda
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              Contact our bottling plant directly for fresh Joker Golisoda crate orders, territory distributorship, and wholesale pricing.
            </p>

            <div className="space-y-3.5 mb-6">
              <a
                href={prefilledWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all text-emerald-950 font-bold"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase text-emerald-700 font-semibold block">Instant WhatsApp</span>
                  <span className="text-sm sm:text-base font-bold">Chat with Factory</span>
                </div>
              </a>

              <a
                href={`tel:${companyDetails.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200 transition-all text-stone-900 font-bold"
              >
                <div className="w-10 h-10 rounded-full bg-joker-red text-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase text-stone-500 font-semibold block">Click to Call</span>
                  <span className="text-sm sm:text-base font-bold">{companyDetails.phoneFormatted}</span>
                </div>
              </a>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-stone-900">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-joker-red flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase text-stone-500 font-semibold block mb-0.5">Factory Address</span>
                    <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
                      {companyDetails.factoryAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Clean Minimal Form */}
          <div className="lg:col-span-7 bg-joker-cream rounded-3xl p-6 sm:p-8 border border-stone-200">
            <h3 className="text-xl font-bold text-stone-900 mb-1">
              Quick Enquiry Form
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Leave your details and we will call you back.
            </p>

            {submitted ? (
              <div className="p-6 bg-white rounded-2xl text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-lg font-bold text-stone-900 mb-1">Thank You!</h4>
                <p className="text-xs text-stone-600 mb-4">
                  We have received your enquiry and will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-800"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-joker-red"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone Number / WhatsApp"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-joker-red"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="Your Shop / Location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-joker-red"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Flavours needed or message..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-joker-red resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-joker-red hover:bg-joker-red-dark text-white font-bold text-sm shadow transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Sending...' : 'Send Enquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Interactive Google Map Section */}
        <div className="w-full rounded-3xl overflow-hidden border border-stone-200 shadow-md bg-stone-100">
          <div className="px-6 py-4 bg-white border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-joker-red flex-shrink-0" />
              <div>
                <span className="text-sm font-bold text-stone-900 block">Factory & Bottling Plant Location</span>
                <span className="text-xs text-stone-500">{companyDetails.factoryAddress}</span>
              </div>
            </div>

            <a
              href={companyDetails.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-stone-900 hover:bg-black text-white text-xs font-semibold self-start sm:self-auto transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-emerald-400" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Interactive Google Maps Iframe */}
          <div className="relative w-full h-[320px] sm:h-[400px]">
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
