"use client";

import { useState } from "react";
import { STAKEHOLDERS } from "@/lib/constants";

const TABS = [
  {
    key: "students",
    num: "01",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 sm:w-6 sm:h-6">
        <circle cx="16" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "institutions",
    num: "02",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M16 4L4 12h24L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="8" y="12" width="16" height="14" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="19" width="6" height="7" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    key: "experts",
    num: "03",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 sm:w-6 sm:h-6">
        <circle cx="16" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="26" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 12v4M16 16l-7 5M16 16l7 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const DESCRIPTIONS = {
  students:
    "Acquire deep industrial expertise, technical sprints exposure, and a pride-driven professional character to solve global challenges with a Bharat-first mindset.",
  institutions:
    "Foster placement depth and curriculum relevance by involving global corporate leaders in your academic committees, labs, and elective structures.",
  experts:
    "Impart your technical expertise, career learnings, and ethical values. Discover top student talents long before standard college placement seasons start.",
};

const ACCENT_LABELS = {
  students: "Empowering the Future",
  institutions: "Institutional Excellence",
  experts: "Guiding the Next Generation",
};

export default function WhoWeServe() {
  const [activeTab, setActiveTab] = useState("students");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (key) => {
    if (key === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(key);
      setIsAnimating(false);
    }, 280);
  };

  const currentStakeholder = STAKEHOLDERS[activeTab];
  const activeTabMeta = TABS.find((t) => t.key === activeTab);

  return (
    <section
      id="who-we-serve"
      className="relative bg-navy overflow-hidden"
    >
      {/* ── Background Textures ─────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #FBF9F5 1px, transparent 1px), linear-gradient(to bottom, #FBF9F5 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.04] to-transparent pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gold/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 right-1/4 w-80 h-80 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />

      {/* ── Section Header ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="py-16 md:py-24 border-b border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <span className="w-8 h-px bg-gold" />
                <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold font-bold">
                  Who We Serve
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-ivory tracking-tight leading-[1.0]">
                The Stakeholder
                <br />
                <span className="italic font-normal text-gold/80">Advantage</span>
              </h2>
            </div>
            <p className="text-sm font-sans text-ivory/55 max-w-xs leading-relaxed font-light md:text-right">
              Our structured interaction loops deliver profound, measurable impact for the three pillars of national development.
            </p>
          </div>
        </div>

        {/* ── Tab Switcher Row ──────────────────────────────────── */}
        <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none scroll-x-touch border-b border-white/10 -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`group relative flex-1 flex-shrink-0 sm:flex-shrink flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 px-5 py-4 sm:px-6 sm:py-6 transition-all duration-400 focus:outline-none text-left ${
                  isActive
                    ? "bg-white/5"
                    : "hover:bg-white/[0.03]"
                }`}
              >
                {/* Active top border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 transition-transform duration-500 origin-left bg-gold ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
                <span
                  className={`transition-colors duration-400 ${
                    isActive ? "text-gold" : "text-white/30 group-hover:text-white/50"
                  }`}
                >
                  {tab.icon}
                </span>
                <div>
                  <span
                    className={`block font-serif text-sm sm:text-base md:text-lg tracking-wide transition-colors duration-400 ${
                      isActive ? "text-ivory" : "text-white/40 group-hover:text-white/70"
                    }`}
                  >
                    {STAKEHOLDERS[tab.key].title.replace("For ", "")}
                  </span>
                  <span
                    className={`block text-[9px] sm:text-[10px] font-sans uppercase tracking-widest mt-0.5 transition-colors duration-400 ${
                      isActive ? "text-gold/70" : "text-white/25"
                    }`}
                  >
                    {tab.num}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Content Panel ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-16 md:py-20">
        <div
          className={`transition-all duration-280 transform ${
            isAnimating
              ? "opacity-0 translate-y-5"
              : "opacity-100 translate-y-0"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">

            {/* ── Left: Headline + Description ─────────────────── */}
            <div className="lg:col-span-5 space-y-8">
              {/* Big number stamp */}
              <div className="flex items-center gap-4">
                <span className="font-serif text-[64px] sm:text-[80px] leading-none text-white/5 select-none font-bold">
                  {activeTabMeta?.num}
                </span>
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory tracking-tight leading-snug">
                    {currentStakeholder.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-sans text-gold uppercase tracking-widest font-medium">
                    {currentStakeholder.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base font-sans text-ivory/65 font-light leading-relaxed border-l-2 border-gold/30 pl-5">
                {DESCRIPTIONS[activeTab]}
              </p>

              {/* Accent line */}
              <div className="flex items-center gap-5 pt-4">
                <div className="h-px bg-white/10 flex-grow" />
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-white/30 whitespace-nowrap">
                  {ACCENT_LABELS[activeTab]}
                </span>
                <div className="h-px bg-white/10 flex-grow" />
              </div>
            </div>

            {/* ── Right: Benefits Grid ───────────────────────────── */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {currentStakeholder.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/[0.04] border border-white/8 hover:bg-white/[0.07] hover:border-white/15 transition-all duration-400 p-7 overflow-hidden"
                  >
                    {/* Ghost number */}
                    <span className="absolute bottom-3 right-4 font-serif text-5xl text-white/[0.04] font-bold leading-none select-none group-hover:text-white/[0.07] transition-colors duration-400">
                      {index + 1}
                    </span>

                    {/* Growing gold line */}
                    <div className="w-8 h-0.5 bg-gold/40 group-hover:w-14 transition-all duration-500 mb-5" />

                    <div className="relative z-10 space-y-3">
                      <h4 className="font-serif text-lg text-ivory tracking-tight leading-snug">
                        {benefit.title}
                      </h4>
                      <p className="text-sm font-sans text-white/55 leading-relaxed font-light">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer Band ────────────────────────────────────────── */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-sans text-white/35 tracking-wider">
            Structured to empower students, institutions &amp; experts alike.
          </p>
          <div className="flex items-center gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                aria-label={`Switch to ${tab.key}`}
                className={`w-2 h-2 rounded-full transition-all duration-400 ${
                  activeTab === tab.key
                    ? "bg-gold w-6"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
