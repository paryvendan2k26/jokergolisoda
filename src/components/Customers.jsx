import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export default function Customers() {
  const [completedStep, setCompletedStep] = useState(1);

  // Smooth loop: Line connects Dot 1 -> Dot 2 -> Dot 3 with tick animations
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
      desc: 'Send crate quantity and flavour preferences via Call or WhatsApp.',
    },
    {
      num: 2,
      title: 'We Process Order',
      desc: 'Fresh counter-pressure bottling, carbonation check, and crating.',
    },
    {
      num: 3,
      title: 'Delivered to You',
      desc: 'Direct doorstep dispatch to your shop or warehouse wherever you are.',
    },
  ];

  // Helper for vertical progress bar height
  const getLineHeight = () => {
    if (completedStep === 1) return '0%';
    if (completedStep === 2) return '50%';
    return '100%';
  };

  return (
    <section
      id="delivery"
      className="py-20 sm:py-28 bg-white border-b border-stone-200/80"
      aria-label="Direct Batch Delivery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ========================================================= */}
          {/* LEFT SIDE: Simple Process Story & Value Propositions      */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-joker-red block mb-2">
              Simple Wholesale Fulfillment
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-joker-charcoal tracking-tight uppercase leading-[1.05] mb-6">
              Joker Golisoda <br />
              Batch Delivery
            </h2>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal mb-6">
              We make wholesale soda stocking completely effortless for retailers, supermarkets, restaurants, and caterers across South India.
            </p>

            <p className="text-sm sm:text-base text-stone-500 leading-relaxed font-normal mb-8">
              No complex supply chain delays or middleman markups. Every batch is bottled fresh on order, packed into heavy-gauge returnable crates, and dispatched directly to your doorstep.
            </p>

            {/* 3 Clean Assurance Badges */}
            <div className="space-y-3 pt-4 border-t border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-stone-800">
                  Direct Factory Rates — Zero Distributor Markups
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-stone-800">
                  Returnable Crate Logistics — 24 Bottles per Crate
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-stone-800">
                  Guaranteed Fast Dispatch — Direct to Your Store
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT SIDE: Animated Timeline with Connecting Line & Ticks*/}
          {/* ========================================================= */}
          <div className="lg:col-span-7 bg-stone-50/70 rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm">
            <div className="relative pl-4 sm:pl-6">
              {/* Background Gray Vertical Line */}
              <div className="absolute left-[34px] sm:left-[42px] top-8 bottom-8 w-1 bg-stone-200 rounded-full z-0" />

              {/* Animated Green Vertical Connecting Line */}
              <div
                className="absolute left-[34px] sm:left-[42px] top-8 w-1 bg-emerald-500 rounded-full z-0 transition-all duration-700 ease-out"
                style={{
                  height: `calc(${getLineHeight()} - (${getLineHeight()} === '100%' ? 0px : 16px))`,
                  maxHeight: 'calc(100% - 64px)',
                }}
              />

              {/* 3 Step Items with Dots & Tick Mark Animations */}
              <div className="relative z-10 space-y-8 sm:space-y-10">
                {steps.map((step) => {
                  const isDone = completedStep >= step.num;

                  return (
                    <div
                      key={step.num}
                      onClick={() => setCompletedStep(step.num)}
                      className="flex items-start gap-5 sm:gap-6 cursor-pointer group text-left select-none"
                    >
                      {/* Large Animated Dot */}
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-black transition-all duration-500 shadow-md flex-shrink-0 ${
                          isDone
                            ? 'bg-emerald-500 text-white ring-8 ring-emerald-100 scale-105 shadow-emerald-500/25'
                            : 'bg-white text-stone-400 border-2 border-stone-300 group-hover:border-stone-400 text-base sm:text-lg'
                        }`}
                      >
                        {isDone ? (
                          <Check className="w-7 h-7 sm:w-8 sm:h-8 stroke-[3.5] animate-in zoom-in-50 duration-300" />
                        ) : (
                          <span>0{step.num}</span>
                        )}
                      </div>

                      {/* Step Text Info */}
                      <div className="pt-2">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-black text-joker-red uppercase tracking-wider">
                            Step 0{step.num}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-joker-charcoal uppercase tracking-tight leading-tight">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm sm:text-base text-stone-600 font-normal max-w-md">
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
