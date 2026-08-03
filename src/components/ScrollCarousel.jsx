"use client";

import { useRef, useState, useEffect } from "react";
import { CAROUSEL_ITEMS } from "@/lib/constants";

export default function ScrollCarousel() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 350;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollLeft = container.scrollLeft;
          const maxScrollLeft = container.scrollWidth - container.clientWidth;
          if (maxScrollLeft > 0) {
            const percentage = scrollLeft / maxScrollLeft;
            const index = Math.round(percentage * (CAROUSEL_ITEMS.length - 1));
            setActiveIndex(index);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-4">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-bold">
              Reports & Updates
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy tracking-tight">
              Actionable Insights
            </h2>
          </div>
          {/* Custom navigation arrows */}
          <div className="flex space-x-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="p-3 border border-hairline hover:border-gold hover:text-gold text-navy transition-colors duration-300 focus:outline-none"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 border border-hairline hover:border-gold hover:text-gold text-navy transition-colors duration-300 focus:outline-none"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Snapping Row */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-none pb-4 -mx-6 px-6 lg:mx-0 lg:px-0"
          style={{ scrollBehavior: "smooth" }}
        >
          {CAROUSEL_ITEMS.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[290px] md:w-[360px] snap-start bg-card border border-hairline p-8 flex flex-col justify-between hover:border-gold/30 transition-editorial duration-300"
            >
              <div className="space-y-4">
                {/* Tag */}
                <span className="text-[10px] font-sans uppercase tracking-widest text-sage font-bold">
                  {item.tag}
                </span>
                {/* Title */}
                <h3 className="font-serif text-2xl font-medium text-navy tracking-tight leading-snug">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-sm font-sans text-ink/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decoration */}
              <div className="mt-8 pt-4 border-t border-hairline flex items-center justify-between text-xs font-sans text-ink/40">
                <span>IAIF Documented</span>
                <span className="font-serif italic text-navy">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Indicator Dots */}
        <div className="flex justify-center items-center space-x-2 mt-6 lg:hidden">
          {CAROUSEL_ITEMS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (containerRef.current) {
                  const container = containerRef.current;
                  const maxScrollLeft = container.scrollWidth - container.clientWidth;
                  const scrollTarget = (idx / (CAROUSEL_ITEMS.length - 1)) * maxScrollLeft;
                  container.scrollTo({
                    left: scrollTarget,
                    behavior: "smooth",
                  });
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? "w-6 bg-gold" : "w-2 bg-hairline hover:bg-gold/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
