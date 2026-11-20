import React, { useState, useEffect } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Customers() {
  const [completedStep, setCompletedStep] = useState(1);

  // Smooth sequence loop: Step 1 -> Step 2 -> Step 3 with animated tick marks
  useEffect(() => {
    let t1, t2;

    const runSequence = () => {
      setCompletedStep(1);
      t1 = setTimeout(() => setCompletedStep(2), 1400);
      t2 = setTimeout(() => setCompletedStep(3), 2800);
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
      desc: 'Send your crate requirements and flavor selection.',
    },
    {
      num: 2,
      title: 'We Process Order',
      desc: 'Fresh bottling, pressure-tested crating, and dispatch prep.',
    },
    {
      num: 3,
      title: 'Delivered to You',
      desc: 'Direct doorstep delivery to your store, supermarket, or venue.',
    },
  ];

  // Helper for animated connecting line height
  const getLineHeight = () => {
    if (completedStep === 1) return '0%';
    if (completedStep === 2) return '50%';
    return '100%';
  };

  return (
    <section
      id="delivery"
      className="py-16 sm:py-24 bg-white border-b border-stone-200/80 text-left"
      aria-label="Direct Batch Delivery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Header & Delivery Summary */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-joker-red block mb-2">
              Direct Wholesale Supply
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-joker-charcoal tracking-tight uppercase leading-[1.08] mb-4">
              Joker Golisoda Batch Delivery
            </h2>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal mb-3 max-w-xl">
              Streamlined crate logistics direct from Dhanvin Foods' Hosur bottling plant to retailers, supermarkets, highway dhabas, and event caterers across Tamil Nadu and Karnataka.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal mb-6 max-w-xl">
              Delivered in returnable crates of 24 heavy-gauge 300ml Codd-neck glass bottles. Freshly carbonated with 100% natural cane sugar and dispatched with guaranteed doorstep delivery.
            </p>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-3 max-w-md mb-8">
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/90 shadow-sm">
                <span className="text-xs font-black text-stone-900 uppercase block mb-0.5">24 Bottles / Crate</span>
                <span className="text-[11px] text-stone-500 font-medium">Returnable glass bottles</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/90 shadow-sm">
                <span className="text-xs font-black text-stone-900 uppercase block mb-0.5">Doorstep Logistics</span>
                <span className="text-[11px] text-stone-500 font-medium">Quick dispatch across regions</span>
              </div>
            </div>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-joker-charcoal hover:bg-black text-white font-black text-xs sm:text-sm tracking-wider uppercase transition-all hover:scale-105 active:scale-95"
              >
                <span>Order Batch Crates</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Connected Line with Animated Dots & Tick Marks */}
          <div className="lg:col-span-6 bg-stone-50/70 p-6 sm:p-8 md:p-10 rounded-3xl border border-stone-200/90 shadow-sm">
            <div className="relative pl-2 sm:pl-4">
              {/* Vertical Connecting Line Track */}
              <div className="absolute top-8 bottom-8 left-8 sm:left-10 w-1.5 bg-stone-200 rounded-full z-0" />

              {/* Animated Green Progress Line */}
              <div
                className="absolute top-8 left-8 sm:left-10 w-1.5 bg-emerald-500 rounded-full z-0 transition-all duration-700 ease-out"
                style={{ height: getLineHeight() }}
              />

              {/* 3 Step Rows with Large Dots and Animated Tick Marks */}
              <div className="relative z-10 space-y-8 sm:space-y-10">
                {steps.map((step) => {
                  const isDone = completedStep >= step.num;

                  return (
                    <div
                      key={step.num}
                      onClick={() => setCompletedStep(step.num)}
                      className="flex items-start gap-4 sm:gap-6 cursor-pointer group select-none"
                    >
                      {/* Large Animated Dot */}
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-black transition-all duration-500 shadow-sm flex-shrink-0 ${
                          isDone
                            ? 'bg-emerald-500 text-white ring-4 ring-emerald-100 scale-105 shadow-emerald-500/25'
                            : 'bg-white text-stone-400 border-2 border-stone-300 group-hover:border-stone-400 text-sm sm:text-base'
                        }`}
                      >
                        {isDone ? (
                          <Check className="w-6 h-6 sm:w-7 sm:h-7 stroke-[3.5] animate-in zoom-in-50 duration-300" />
                        ) : (
                          <span>0{step.num}</span>
                        )}
                      </div>

                      {/* Step Details */}
                      <div className="pt-1">
                        <h3 className="text-lg sm:text-xl font-black text-joker-charcoal uppercase tracking-tight">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-stone-500 font-medium max-w-sm">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
