import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

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
      desc: 'Send crate requirements.',
    },
    {
      num: 2,
      title: 'We Process Order',
      desc: 'Fresh bottling & crating.',
    },
    {
      num: 3,
      title: 'Delivered to You',
      desc: 'Direct doorstep delivery.',
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
      className="py-20 sm:py-28 lg:py-32 bg-white border-b border-stone-200/80 text-center"
      aria-label="Direct Batch Delivery"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big Bold Section Heading (No unnecessary texts) */}
        <div className="mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-joker-charcoal tracking-tight uppercase">
            Joker Golisoda Batch Delivery
          </h2>
        </div>

        {/* =============================================================== */}
        {/* BIGGER CONNECTING LINE WITH LARGER DOTS & TICK MARK ANIMATION   */}
        {/* =============================================================== */}
        <div className="relative max-w-4xl mx-auto">
          {/* Background Gray Line */}
          <div className="absolute top-8 sm:top-10 left-10 right-10 h-1.5 bg-stone-200 rounded-full -translate-y-1/2 z-0" />

          {/* Animated Green Connecting Line */}
          <div
            className="absolute top-8 sm:top-10 left-10 h-1.5 bg-emerald-500 rounded-full -translate-y-1/2 z-0 transition-all duration-700 ease-out"
            style={{
              width: `calc(${getLineWidth()} - (${getLineWidth()} === '100%' ? 0px : 20px))`,
              maxWidth: 'calc(100% - 80px)',
            }}
          />

          {/* 3 Large Step Dots & Bold Captions */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start">
            {steps.map((step) => {
              const isDone = completedStep >= step.num;

              return (
                <div
                  key={step.num}
                  onClick={() => setCompletedStep(step.num)}
                  className="flex flex-col items-center text-center cursor-pointer group select-none"
                >
                  {/* Large Dot with Animated Tick Mark */}
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center font-black transition-all duration-500 shadow-md ${
                      isDone
                        ? 'bg-emerald-500 text-white ring-8 ring-emerald-100 scale-110 shadow-emerald-500/30'
                        : 'bg-white text-stone-400 border-2 border-stone-300 group-hover:border-stone-400 text-lg sm:text-xl'
                    }`}
                  >
                    {isDone ? (
                      <Check className="w-8 h-8 sm:w-10 sm:h-10 stroke-[3.5] animate-in zoom-in-50 duration-300" />
                    ) : (
                      <span>0{step.num}</span>
                    )}
                  </div>

                  {/* Step Title in Bigger Bold Letters */}
                  <h3 className="mt-6 text-xl sm:text-2xl lg:text-3xl font-black text-joker-charcoal uppercase tracking-tight">
                    {step.title}
                  </h3>

                  {/* Simple Text */}
                  <p className="mt-2 text-sm sm:text-base text-stone-500 font-semibold max-w-xs">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
