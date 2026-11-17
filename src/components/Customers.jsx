import React, { useState, useEffect } from 'react';
import { Check, MessageCircle, Phone } from 'lucide-react';
import { companyDetails } from '../data/flavours';

export default function Customers() {
  const [completedStep, setCompletedStep] = useState(1);

  // Smooth loop: Line connects Dot 1 -> Dot 2 -> Dot 3 with tick animations
  useEffect(() => {
    let t1, t2;

    const runSequence = () => {
      setCompletedStep(1);
      t1 = setTimeout(() => setCompletedStep(2), 1200);
      t2 = setTimeout(() => setCompletedStep(3), 2600);
    };

    runSequence();
    const interval = setInterval(runSequence, 6500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(interval);
    };
  }, []);

  const steps = [
    {
      num: 1,
      title: 'Retailers Contact Us',
      desc: 'Send your crate requirements via Call or WhatsApp.',
    },
    {
      num: 2,
      title: 'We Process Order',
      desc: 'Fresh bottling, carbonation check, and hygienic crating.',
    },
    {
      num: 3,
      title: 'Delivered to You',
      desc: 'Direct dispatch to your store wherever you are.',
    },
  ];

  // Helper for progress bar width
  const getLineWidth = () => {
    if (completedStep === 1) return '0%';
    if (completedStep === 2) return '50%';
    return '100%';
  };

  return (
    <section
      id="delivery"
      className="py-16 sm:py-20 bg-white border-b border-stone-200/80 text-center"
      aria-label="Direct Batch Delivery"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-joker-red block mb-2">
            Seamless Wholesale Fulfillment
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-joker-charcoal tracking-tight uppercase">
            Direct Batch Delivery
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 font-normal">
            No complicated middlemen. Order authentic marble soda direct from our bottling unit.
          </p>
        </div>

        {/* =============================================================== */}
        {/* CONNECTING LINE WITH DOTS & TICK MARK ANIMATION                 */}
        {/* =============================================================== */}
        <div className="relative max-w-3xl mx-auto mb-14 sm:mb-16">
          {/* Background Gray Line */}
          <div className="absolute top-6 left-8 right-8 h-1 bg-stone-200 rounded-full -translate-y-1/2 z-0" />

          {/* Animated Green Connecting Line */}
          <div
            className="absolute top-6 left-8 h-1 bg-emerald-500 rounded-full -translate-y-1/2 z-0 transition-all duration-700 ease-out"
            style={{
              width: `calc(${getLineWidth()} - (${getLineWidth()} === '100%' ? 0px : 16px))`,
              maxWidth: 'calc(100% - 64px)',
            }}
          />

          {/* 3 Step Dots & Captions */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-start">
            {steps.map((step) => {
              const isDone = completedStep >= step.num;

              return (
                <div
                  key={step.num}
                  onClick={() => setCompletedStep(step.num)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Dot with Animated Tick Mark */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-sm transition-all duration-500 shadow-sm ${
                      isDone
                        ? 'bg-emerald-500 text-white ring-4 ring-emerald-100 scale-110 shadow-emerald-500/25'
                        : 'bg-white text-stone-400 border-2 border-stone-300 group-hover:border-stone-400'
                    }`}
                  >
                    {isDone ? (
                      <Check className="w-6 h-6 stroke-[3] animate-in zoom-in-50 duration-300" />
                    ) : (
                      <span>0{step.num}</span>
                    )}
                  </div>

                  {/* Step Title in Bold Letters */}
                  <h3 className="mt-4 text-base sm:text-lg font-black text-joker-charcoal uppercase tracking-tight">
                    {step.title}
                  </h3>

                  {/* Simple Text */}
                  <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-xs font-normal">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Action Order Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(
              'Hello Joker Golisoda, I would like to order fresh crates for my retail shop.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order on WhatsApp</span>
          </a>

          <a
            href={`tel:${companyDetails.phone}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-stone-100 text-stone-800 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-stone-300 transition-all hover:border-joker-red hover:text-joker-red shadow-sm"
          >
            <Phone className="w-4 h-4 text-joker-red" />
            <span>Call: {companyDetails.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
