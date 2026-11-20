import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { companyDetails } from '../data/flavours';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const indianStates = [
    'Tamil Nadu',
    'Karnataka',
    'Andhra Pradesh',
    'Telangana',
    'Kerala',
    'Maharashtra',
    'Goa',
    'Puducherry',
    'Gujarat',
    'Delhi NCR',
    'Other'
  ];

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
            email_address: formData.email,
            city: formData.city,
            state: formData.state,
            message: formData.message,
            reply_to: formData.email || companyDetails.email
          },
          publicKey
        );
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
        console.log('Contact Us submission:', formData);
      }

      setSubmitted(true);
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#84CC16', '#FFFFFF', '#22C55E']
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-[#0D5230] text-white relative overflow-hidden"
      aria-label="Contact Us"
    >
      {/* Subtle ambient beverage bubbles in the green background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-lime-400 blur-3xl" />
        <div className="absolute bottom-12 right-10 w-96 h-96 rounded-full bg-emerald-300 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Column: Contact Us Heading & Simple Form */}
          <div className="flex flex-col justify-center text-left">
            <span className="text-xs font-black uppercase tracking-widest text-lime-400 block mb-2">
              Get in Touch
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-none mb-3">
              Contact Us
            </h2>

            <p className="text-emerald-100/90 text-sm sm:text-base font-normal mb-8 max-w-lg">
              Have inquiries about bulk supply, dealership opportunities, or custom orders? Reach out to Joker Golisoda today.
            </p>

            {submitted ? (
              <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-center max-w-lg animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-lime-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-1">Thank you!</h3>
                <p className="text-emerald-100 text-sm">
                  Your message has been received. Our team will contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', city: '', state: '', message: '' });
                  }}
                  className="mt-4 px-5 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 max-w-lg w-full">
                {/* 1. Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full px-5 py-3.5 rounded-full bg-white text-stone-900 placeholder:text-stone-400 font-semibold text-sm sm:text-base border-0 focus:outline-none focus:ring-2 focus:ring-lime-400 shadow-sm"
                  />
                </div>

                {/* 2 & 3. Phone & Email in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                    className="w-full px-5 py-3.5 rounded-full bg-white text-stone-900 placeholder:text-stone-400 font-semibold text-sm sm:text-base border-0 focus:outline-none focus:ring-2 focus:ring-lime-400 shadow-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-5 py-3.5 rounded-full bg-white text-stone-900 placeholder:text-stone-400 font-semibold text-sm sm:text-base border-0 focus:outline-none focus:ring-2 focus:ring-lime-400 shadow-sm"
                  />
                </div>

                {/* 4 & 5. City & State dropdown in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                    className="w-full px-5 py-3.5 rounded-full bg-white text-stone-900 placeholder:text-stone-400 font-semibold text-sm sm:text-base border-0 focus:outline-none focus:ring-2 focus:ring-lime-400 shadow-sm"
                  />

                  <div className="relative">
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className={`w-full px-5 py-3.5 rounded-full bg-white font-semibold text-sm sm:text-base border-0 focus:outline-none focus:ring-2 focus:ring-lime-400 shadow-sm appearance-none cursor-pointer pr-10 ${
                        formData.state ? 'text-stone-900' : 'text-stone-400'
                      }`}
                    >
                      <option value="" disabled>Select State</option>
                      {indianStates.map((st) => (
                        <option key={st} value={st} className="text-stone-900">
                          {st}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* 6. Message */}
                <div>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    className="w-full px-5 py-3.5 rounded-2xl bg-white text-stone-900 placeholder:text-stone-400 font-semibold text-sm sm:text-base border-0 focus:outline-none focus:ring-2 focus:ring-lime-400 shadow-sm resize-none"
                  />
                </div>

                {/* 7. Rounded Lime-Green "SUBMIT NOW" Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#84CC16] hover:bg-[#65A30D] text-stone-950 font-black text-sm sm:text-base tracking-wider uppercase shadow-lg shadow-black/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-75 cursor-pointer"
                  >
                    <span>{loading ? 'SUBMITTING...' : 'SUBMIT NOW'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: PNG Image of jokercontactus */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Soft ambient green backlight */}
              <div className="absolute inset-0 bg-lime-400/20 rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

              <picture>
                <source srcSet="/assets/jokercontactus.webp" type="image/webp" />
                <img
                  src="/assets/jokercontactus.png"
                  alt="Joker Golisoda Contact Us"
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 w-full h-auto object-contain rounded-3xl drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] select-none pointer-events-none transition-transform duration-500 hover:scale-[1.02]"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
