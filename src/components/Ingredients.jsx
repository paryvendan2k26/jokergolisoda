import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Droplets, Sparkles, Sprout, Wind, ShieldCheck, HeartHandshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Ingredients() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.ingredient-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const ingredientList = [
    {
      icon: Droplets,
      title: "7-Stage RO & UV Purified Water",
      subtitle: "IS 10500 Certified Potability",
      description: "Treated through sand filtration, activated carbon, double reverse osmosis, and ultraviolet sterilization to ensure zero micro-contaminants.",
      tag: "Pure Mineral Base"
    },
    {
      icon: Sprout,
      title: "Sulphurless Pure Cane Sugar",
      subtitle: "100% Natural Sweetener",
      description: "Double-refined natural Indian sugarcane sweetness. Completely free from chemical bleaching agents, aspartame, sucralose, or artificial sweeteners.",
      tag: "Zero Artificial Sweeteners"
    },
    {
      icon: Wind,
      title: "Food-Grade Carbon Dioxide",
      subtitle: "3.8 to 4.2 Volumes CO2 Pressure",
      description: "Pressurized precisely to seal the food-grade rubber washer and glass marble, delivering the thunderous signature pop and long-lasting bite.",
      tag: "High Effervescence"
    },
    {
      icon: Sparkles,
      title: "Real Botanical & Fruit Extracts",
      subtitle: "Traditional Heritage Recipes",
      description: "Genuine Damask rose essence, wild Hemidesmus Indicus (Nannari) roots, slow-roasted cumin seeds, rock salt, and sun-ripened citrus concentrates.",
      tag: "True Flavour Profiles"
    },
    {
      icon: ShieldCheck,
      title: "Food-Grade Acidity Regulators",
      subtitle: "INS 330 & INS 331 (Citric Acid)",
      description: "Naturally occurring fruit acids derived from citrus fruit to regulate optimum pH levels, accentuating freshness and crisp flavor stability.",
      tag: "FSSAI Permitted"
    },
    {
      icon: HeartHandshake,
      title: "Hygienic Glass Bottling",
      subtitle: "Heavy-Gauge Codd-Neck Glass",
      description: "Eco-friendly, reusable, and 100% inert container glass that preserves carbonation and flavor notes without any plastic leaching.",
      tag: "100% Recyclable Glass"
    }
  ];

  return (
    <section
      id="ingredients"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
      aria-label="Pure Ingredients We Use"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-joker-red block mb-2">
            No Shortcuts • Pure Formulations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-joker-charcoal tracking-tight">
            What Goes Inside Our Bottles
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 font-normal leading-relaxed">
            We hold our manufacturing to strict statutory standards. Our formulations rely on pure cane sugar, certified water, genuine botanical extracts, and high carbonation. Never diluted, never compromised.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ingredientList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="ingredient-card bg-joker-cream-light rounded-2xl p-7 border border-stone-200/90 transition-all duration-300 hover:border-joker-red/40 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-stone-200">
                      <Icon className="w-6 h-6 text-joker-red" />
                    </div>
                    <span className="text-[11px] font-semibold text-stone-500 bg-white/80 px-2.5 py-1 rounded-full border border-stone-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-joker-red block mb-3">
                    {item.subtitle}
                  </span>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Quality Verified at Dhanvin Lab</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Manufacturing Transparency Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-base sm:text-lg font-bold tracking-tight mb-1">
              Lab Reports & Certificate of Analysis (COA) Available for Wholesalers
            </h4>
            <p className="text-xs sm:text-sm text-stone-400 font-normal">
              Every production batch undergoes statutory microbial, TDS, and pressure testing. Full batch COA reports are provided with commercial consignments.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-white hover:bg-stone-100 text-stone-900 text-xs sm:text-sm font-bold transition-colors"
          >
            Request Batch COA
          </a>
        </div>
      </div>
    </section>
  );
}
