"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Trigger entrance animations after a brief delay
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.35;

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[70vh] md:min-h-[75vh] flex items-center bg-navy overflow-hidden">
      {/* ─── Background Image with Parallax ─────────────── */}
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ transform: `translateY(${parallaxOffset}px) scale(1.1)` }}>
        <Image
          src="/images/hero.png"
          alt="Students and professionals collaborating in an open educational lab environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          onLoad={() => {}}
        />
      </div>

      {/* ─── Cinematic Overlay System ───────────────────── */}
      {/* Color grade */}
      <div className="absolute inset-0 bg-navy/30 mix-blend-multiply z-[1]" />
      {/* Vignette corners */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(20,33,61,0.5) 100%)",
        }}
      />
      {/* Bottom gradient for content readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent z-[3]" />
      {/* Top gradient for nav readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-transparent z-[3]" />

      {/* ─── Decorative Grid Pattern ───────────────────── */}
      <div
        className="absolute inset-0 z-[4] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #FBF9F5 1px, transparent 1px), linear-gradient(to bottom, #FBF9F5 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ─── Decorative Gold Corner Accents ─────────────── */}
      <div className="absolute top-20 left-6 lg:left-12 z-[5] pointer-events-none">
        <div
          className={`transition-all duration-1000 delay-700 ${loaded ? "opacity-100" : "opacity-0"}`}>
          <div className="w-12 h-12 border-t border-l border-gold/20" />
        </div>
      </div>
      <div className="absolute bottom-12 right-6 lg:right-12 z-[5] pointer-events-none">
        <div
          className={`transition-all duration-1000 delay-900 ${loaded ? "opacity-100" : "opacity-0"}`}>
          <div className="w-12 h-12 border-b border-r border-gold/20" />
        </div>
      </div>

      {/* ─── Floating Glow Orbs ────────────────────────── */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gold/[0.04] rounded-full blur-[100px] z-[4] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-terracotta/[0.03] rounded-full blur-[80px] z-[4] pointer-events-none" />

      {/* ─── Main Content ──────────────────────────────── */}
      <div className="relative z-10 w-full pb-8 md:pb-12 pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* ─── Left: Text Content ────────────────────── */}
            <div className="lg:col-span-8 xl:col-span-7 space-y-4 md:space-y-5">
              {/* Eyebrow Tag */}
              <div
                className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  loaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}>
                <span className="inline-flex items-center gap-3 text-[10px] sm:text-[11px] md:text-xs font-sans uppercase tracking-[0.2em] text-ivory/80 font-bold">
                  <span className="w-8 h-px bg-gold/50" />
                  Bridging Industry &amp; Research Experts with Academia
                </span>
              </div>

              {/* Headline */}
              <div
                className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  loaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "350ms" }}>
                <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-medium text-amber-400 tracking-tight leading-[1.05]">
                  Empowering Students for{" "}
                  <br className="hidden sm:block" />
                  <span className="relative inline-block">
                    Entrepreneurship{" "}
                    <span className="italic font-light text-white/90">&amp;</span> Research
                    {/* Animated underline */}
                    <span
                      className={`absolute bottom-1 md:bottom-2 left-0 h-[2px] bg-gradient-to-r from-amber-400 to-amber-400/30 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        loaded ? "w-full" : "w-0"
                      }`}
                      style={{ transitionDelay: "1200ms" }}
                    />
                  </span>
                </h1>
              </div>

              {/* Subheading */}
              <div
                className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  loaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "500ms" }}>
                <p className="font-sans text-base sm:text-lg text-white opacity-100 leading-relaxed max-w-xl font-normal">
                  {SITE.heroSubline}
                </p>
              </div>

              {/* CTAs */}
              <div
                className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  loaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "650ms" }}>
                <Link
                  href="/get-involved"
                  className="group relative px-8 py-4 bg-gold text-navy text-[11px] font-sans uppercase tracking-[0.15em] font-bold text-center overflow-hidden transition-all duration-400 hover:shadow-lg hover:shadow-gold/20">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Involved
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </Link>
                <Link
                  href="/programs"
                  className="group px-8 py-4 bg-transparent text-white text-[11px] font-sans uppercase tracking-[0.15em] font-semibold text-center border border-white/20 hover:border-gold/60 hover:text-gold transition-all duration-300">
                  <span className="flex items-center justify-center gap-2">
                    Explore Programs
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* ─── Right: Trust Signals ──────────────────── */}
            <div className="lg:col-span-4 xl:col-span-5 hidden lg:flex justify-end">
              <div
                className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  loaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "800ms" }}>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
