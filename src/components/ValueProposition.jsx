"use client";

import { useState } from "react";
import { STAKEHOLDERS } from "@/lib/constants";

const TABS = [
  {
    key: "students",
    num: "01",
    label: "Undergraduate Students",
    shortLabel: "Students",
    badge: "Student Empowerment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14v6.055" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: "institutions",
    num: "02",
    label: "Academic Institutions",
    shortLabel: "Institutions",
    badge: "Institutional Growth",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 7h1m-1 4h1m4-4h1m-1 4h1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: "experts",
    num: "03",
    label: "Industry Experts",
    shortLabel: "Experts",
    badge: "Nation Building",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20H2v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const CATEGORY_BADGES = {
  students: ["Industry Readiness", "Ethical Foundation", "Patriotic Purpose", "Career Guidance", "Portfolio Building", "Employability"],
  institutions: ["Curriculum Alignment", "Faculty Development", "Enhanced Employability", "Resource Sharing", "Curriculum Relevance", "Research Opportunities", "Institutional Prestige"],
  experts: ["Giving Back", "Fresh Perspectives", "Nation Building", "Talent Discovery"],
};

export default function ValueProposition() {
  const [activeTab, setActiveTab] = useState("students");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (key) => {
    if (key === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(key);
      setIsAnimating(false);
    }, 250);
  };

  const currentStakeholder = STAKEHOLDERS[activeTab] || STAKEHOLDERS.students;
  const activeTabMeta = TABS.find((t) => t.key === activeTab);

  return (
    <div className="space-y-6 md:space-y-12">
      {/* ── Mobile Compact Pill Navigation (Visible on < md screens) ──── */}
      <div className="block md:hidden bg-card border border-hairline p-1.5 rounded-lg shadow-sm">
        <div className="grid grid-cols-3 gap-1">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-3 px-2 rounded-md transition-all duration-300 text-center ${
                  isActive
                    ? "bg-[#F3ECE0] text-navy border border-gold shadow-md font-bold"
                    : "text-navy/70 hover:text-navy hover:bg-ivory"
                }`}
              >
                <span className={isActive ? "text-terracotta font-bold" : "text-navy/50"}>
                  {tab.icon}
                </span>
                <span className="text-xs font-sans tracking-tight leading-tight">
                  {tab.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Desktop Tab Switcher (Visible on md+ screens) ──────────────── */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          const benefitCount = STAKEHOLDERS[tab.key]?.benefits?.length || 0;
          return (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`group relative text-left p-6 transition-all duration-300 border focus:outline-none flex flex-col justify-between ${
                isActive
                  ? "bg-[#F3ECE0] text-navy border-2 border-gold shadow-xl shadow-gold/10 scale-[1.02]"
                  : "bg-card border-hairline hover:border-gold/40 text-navy hover:bg-ivory/50"
              }`}
            >
              {/* Active gold line indicator */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 ${
                  isActive ? "bg-gold opacity-100" : "bg-gold/0 group-hover:bg-gold/40"
                }`}
              />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-sans font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm ${
                      isActive ? "bg-terracotta/15 text-terracotta border border-terracotta/20" : "bg-navy/5 text-ink/60"
                    }`}
                  >
                    {tab.badge}
                  </span>
                  <span
                    className={`p-2.5 rounded-full transition-colors ${
                      isActive ? "bg-navy text-gold shadow-sm" : "bg-navy/5 text-navy/60 group-hover:text-gold"
                    }`}
                  >
                    {tab.icon}
                  </span>
                </div>

                <div>
                  <h3
                    className={`font-serif text-xl md:text-2xl font-bold tracking-tight ${
                      isActive ? "text-navy" : "text-navy/80"
                    }`}
                  >
                    {tab.label}
                  </h3>
                  <p
                    className={`text-xs font-sans mt-1 leading-relaxed ${
                      isActive ? "text-ink/85 font-normal" : "text-ink/60 font-light"
                    }`}
                  >
                    {STAKEHOLDERS[tab.key]?.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-navy/10 text-xs font-sans">
                <span className={isActive ? "text-terracotta font-bold" : "text-ink/50 font-medium"}>
                  {benefitCount} Strategic Pillar{benefitCount > 1 ? "s" : ""}
                </span>
                <span
                  className={`inline-flex items-center gap-1 font-bold transition-transform duration-300 ${
                    isActive ? "text-navy translate-x-1" : "text-terracotta group-hover:translate-x-1"
                  }`}
                >
                  Selected &rarr;
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Active Stakeholder Content Display ───────────────────────── */}
      <div
        className={`transition-all duration-300 transform ${
          isAnimating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
        }`}
      >
        {/* Section Header Banner */}
        <div className="bg-navy text-ivory p-5 sm:p-8 md:p-10 border-l-4 border-gold relative overflow-hidden mb-6 md:mb-8 shadow-lg">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 sm:w-64 h-48 sm:h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-gold font-bold">
                Value Proposition &bull; {activeTabMeta?.label}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-ivory">
                {currentStakeholder.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-ivory font-normal leading-relaxed">
                {currentStakeholder.subtitle}
              </p>
            </div>
            

          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {currentStakeholder.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group relative bg-card border border-hairline p-5 sm:p-7 hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-widest font-bold text-terracotta bg-terracotta/10 px-2.5 py-0.5 rounded-xs">
                    {CATEGORY_BADGES[activeTab]?.[idx] || "Advantage"}
                  </span>
                </div>

                <h4 className="font-serif text-lg sm:text-xl font-medium text-navy tracking-tight group-hover:text-gold transition-colors">
                  {benefit.title}
                </h4>

                <p className="text-xs sm:text-sm font-sans text-ink/75 leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>

              {/* Decorative bottom line */}
              <div className="mt-5 pt-3.5 border-t border-hairline flex items-center justify-between text-[10px] sm:text-[11px] font-sans text-ink/40">
                <span>IAIF Advantage</span>
                <span className="w-6 h-0.5 bg-gold/30 group-hover:w-12 group-hover:bg-gold transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
