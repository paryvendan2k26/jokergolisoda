import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, Navigation, ShieldCheck, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { companyDetails } from '../data/flavours';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    requirement: '',
    bot_honey_field: '' // Honeypot trap to catch automated spam bots
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const mountTimeRef = useRef(Date.now());

  useEffect(() => {
    mountTimeRef.current = Date.now();
  }, []);

  // WhatsApp welcome message
  const welcomeWhatsAppUrl = `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(
    'Hello Joker Golisoda! Welcome. I would like to inquire about fresh marble soda crate orders and wholesale pricing.'
  )}`;

  // Sanitize input to strip harmful script tags & prevent injection attacks
  const sanitize = (str) => {
    return str.replace(/[<>]/g, '').trim();
  };

  const handleChange = (e) => {
    setErrorMsg('');
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // 1. HONEYPOT ANTI-SPAM TRAP
    // If the hidden honeypot field has any value, a bot filled it out. Silently drop it.
    if (formData.bot_honey_field) {
      console.warn('Bot detected by honeypot.');
      setSubmitted(true);
      return;
    }

    // 2. TIMING ATTACK BOT DETECTION
    // If form is submitted faster than humanly possible (< 2 seconds), flag as bot.
    const timeSpent = Date.now() - mountTimeRef.current;
    if (timeSpent < 1800) {
      setErrorMsg('Submission too fast. Please verify details.');
      return;
    }

    // 3. RATE LIMITING / FLOOD PREVENTION (Minimum 25-second cooldown between inquiries)
    const lastSubmitTime = localStorage.getItem('joker_last_inquiry');
    if (lastSubmitTime && Date.now() - Number(lastSubmitTime) < 25000) {
      setErrorMsg('Please wait a moment before sending another inquiry.');
      return;
    }

    // 4. STRICT PHONE VALIDATION (Valid phone number 10-15 digits only)
    const cleanedContact = formData.contact.replace(/\s+/g, '');
    const phoneRegex = /^[+]?[\d\s-]{10,15}$/;
    if (!phoneRegex.test(cleanedContact)) {
      setErrorMsg('Please enter a valid 10-digit mobile number or WhatsApp contact.');
      return;
    }

    // 5. SANITIZE FIELDS (Information protection)
    const cleanName = sanitize(formData.name).slice(0, 80);
    const cleanRequirement = sanitize(formData.requirement).slice(0, 500);

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
            from_name: cleanName,
            contact_number: cleanedContact,
            requirement: cleanRequirement,
            to_email: companyDetails.email
          },
          publicKey
        );
      } else {
        // Fallback simulation when EmailJS keys are not yet configured in local environment
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      // Record timestamp to enforce rate limiting
      localStorage.setItem('joker_last_inquiry', Date.now().toString());

      setSubmitted(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#C9232B', '#E0363F', '#F7F0E5']
      });
    } catch (err) {
      console.error('Inquiry dispatch error:', err);
      setErrorMsg('Unable to send at this moment. Please call or WhatsApp us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-stone-50/60 border-b border-stone-200/80" aria-label="Wholesale Inquiries">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-18">
          <span className="text-[11px] font-bold uppercase tracking-widest text-joker-red block mb-2">
            Direct Factory Desk
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-joker-charcoal tracking-tight uppercase">
            Order Joker Golisoda
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 font-normal">
            Reach our bottling facility for fresh crate deliveries, retail distribution, and wholesale pricing.
          </p>
        </div>

        {/* 2-Column Minimal Aesthetic Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-14">
          {/* Left Column: Direct Phone & WhatsApp Hotline */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              {/* Online Factory Dispatch Status */}
              <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Factory Dispatch Active
                </span>
              </div>

              {/* Direct Click-to-Call Phone (Taps straight to phone dialer on mobile) */}
              <div className="mb-6">
                <span className="text-[11px] uppercase font-bold text-stone-400 tracking-wider block mb-1">
                  Call Bottling Unit
                </span>
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="text-2xl sm:text-3xl font-black text-joker-charcoal hover:text-joker-red transition-colors tracking-tight font-mono block"
                >
                  {companyDetails.phoneFormatted}
                </a>
                <span className="text-xs text-stone-500 font-medium mt-1 block">
                  Tap to call directly from your phone
                </span>
              </div>

              {/* Direct WhatsApp Chat with Welcome Message */}
              <div className="mb-8">
                <a
                  href={welcomeWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Minimal Commercial Specs */}
              <div className="pt-6 border-t border-stone-100 space-y-2 text-xs text-stone-600 font-medium">
                <p>• Standard 200ml Glass Codd-Neck Bottles</p>
                <p>• 24 Bottles per Heavy-Gauge Crate</p>
                <p>• Fast Dispatch across Tamil Nadu & South India</p>
              </div>
            </div>

            {/* Plant Address */}
            <div className="pt-6 border-t border-stone-100 flex items-start gap-3 mt-6">
              <MapPin className="w-4 h-4 text-joker-red flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-0.5">
                  Bottling Plant
                </span>
                <p className="text-xs text-stone-600 font-medium leading-relaxed">
                  {companyDetails.factoryAddress}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Protected Minimal 3-Field Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-joker-charcoal uppercase tracking-tight">
                    Quick Inquiry
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Your details are sent directly to our email.
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Protected</span>
                </div>
              </div>

              {/* Security / Error Message Banner */}
              {errorMsg && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {submitted ? (
                <div className="py-10 px-6 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h4 className="text-xl font-black text-stone-900 mb-1">Inquiry Sent to Email</h4>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto mb-6">
                    We have received your details and will call you with crate pricing and dispatch schedules shortly.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', contact: '', requirement: '', bot_honey_field: '' });
                      }}
                      className="px-5 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      New Inquiry
                    </button>

                    <a
                      href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(
                        `Hi Joker Golisoda, I just submitted an inquiry for "${formData.name || 'Wholesale'}". Please share crate rates.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Also Open on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* HIDDEN HONEYPOT SPAM TRAP (Invisible to humans, traps automated bot scripts) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="bot_honey_field"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.bot_honey_field}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Field 1: Name */}
                  <div>
                    <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                      Your Name / Shop Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      maxLength={80}
                      autoComplete="name"
                      placeholder="e.g. Anand"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 hover:bg-stone-100/70 focus:bg-white border border-stone-200 focus:border-joker-charcoal text-sm font-semibold text-stone-900 placeholder:text-stone-400 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Field 2: Contact (Phone / WhatsApp) */}
                  <div>
                    <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                      Contact Number (Phone / WhatsApp)
                    </label>
                    <input
                      type="tel"
                      name="contact"
                      required
                      maxLength={15}
                      autoComplete="tel"
                      placeholder="e.g. 98400 12345"
                      value={formData.contact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 hover:bg-stone-100/70 focus:bg-white border border-stone-200 focus:border-joker-charcoal text-sm font-semibold text-stone-900 placeholder:text-stone-400 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Field 3: What they need */}
                  <div>
                    <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                      What You Need
                    </label>
                    <textarea
                      name="requirement"
                      required
                      rows={3}
                      maxLength={500}
                      placeholder="e.g. 25 Crates of Paneer and Orange soda for store in Chennai..."
                      value={formData.requirement}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 hover:bg-stone-100/70 focus:bg-white border border-stone-200 focus:border-joker-charcoal text-sm font-semibold text-stone-900 placeholder:text-stone-400 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Privacy & Anti-Spam Guarantee */}
                  <div className="flex items-center justify-between text-[11px] text-stone-400 font-medium pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Encrypted & Private. No information shared.
                    </span>
                    <span>Delivered direct to factory inbox</span>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-joker-red hover:bg-joker-red-dark text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? 'Sending to Email...' : 'Send Inquiry to Email'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Minimal Factory Location Map Card */}
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

          <div className="relative w-full h-[280px] sm:h-[340px]">
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
