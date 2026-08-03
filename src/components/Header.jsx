"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const [menuClosing, setMenuClosing] = useState(false);
  const pathname = usePathname();
  const closeTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setExpandedItem(null);
  }, [pathname]);

  const handleMenuEnter = (idx) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setMenuClosing(false);
    setActiveMenu(idx);
  };

  const handleMenuLeave = () => {
    setMenuClosing(true);
    closeTimeout.current = setTimeout(() => {
      setActiveMenu(null);
      setMenuClosing(false);
    }, 200);
  };

  const isHome = pathname === "/";
  const showTransparent = !isScrolled && !mobileMenuOpen && isHome;

  return (
    <>
      <header
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 60 }}
        className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled || mobileMenuOpen ? "py-2.5 sm:py-3.5" : "py-4 md:py-5"
        }`}
      >
        {/* ─── Scrolled Glass Background ──────────────────── */}
        <div
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
          className={`transition-opacity duration-500 ${
            isScrolled || mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(247,243,236,0.94)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "1px",
              background: "linear-gradient(to right, transparent, #D8D3C7, transparent)",
            }}
          />
        </div>

        {/* ─── Nav Bar Content ────────────────────────────── */}
        <div
          style={{ position: "relative", zIndex: 10 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between">
            {/* ─── Logo ──────────────────────────────────── */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 no-underline group"
            >
              <div className="relative">
                <span
                  className="font-serif text-2xl sm:text-3xl font-bold tracking-tight leading-none transition-colors duration-300"
                  style={{
                    color: showTransparent ? "#ffffff" : "#14213D",
                  }}
                >
                  {SITE.name}
                </span>
                {/* Gold dot */}
                <span
                  className="absolute -bottom-0.5 -right-2 w-1.5 h-1.5 bg-gold rounded-full opacity-90 transition-transform group-hover:scale-125 duration-300"
                />
              </div>

              {/* Separator + Foundation */}
              <div
                className={`hidden sm:block w-px h-7 transition-colors duration-300 ${
                  showTransparent ? "bg-white/20" : "bg-hairline"
                }`}
              />
              <span
                className={`hidden sm:block font-sans text-[10px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300 ${
                  showTransparent ? "text-gold/90" : "text-terracotta"
                }`}
              >
                Foundation
              </span>
            </Link>

            {/* ─── Desktop Navigation ────────────────────── */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item, idx) => {
                const hasChildren = item.children && item.children.length > 0;
                const isActive =
                  pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasChildren && handleMenuEnter(idx)}
                    onMouseLeave={() => hasChildren && handleMenuLeave()}
                  >
                    <Link
                      href={item.href}
                      className={`font-sans inline-flex items-center gap-1 px-3.5 py-2 text-xs uppercase tracking-wider font-semibold no-underline transition-colors duration-300 relative whitespace-nowrap ${
                        isActive
                          ? showTransparent
                            ? "text-gold"
                            : "text-navy"
                          : showTransparent
                          ? "text-white/75 hover:text-white"
                          : "text-ink/60 hover:text-navy"
                      }`}
                    >
                      {item.label}
                      {hasChildren && (
                        <svg
                          className={`w-2.5 h-2.5 transition-transform duration-300 ${
                            activeMenu === idx ? "rotate-180 text-gold" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      )}
                      {/* Active gold underline */}
                      <span
                        className={`absolute bottom-0.5 left-3.5 right-3.5 h-0.5 rounded-full bg-gold transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </Link>

                    {/* ─── Dropdown ─────────────────────────── */}
                    {hasChildren && activeMenu === idx && (
                      <div
                        className={`absolute left-1/2 top-full pt-3 w-80 -translate-x-1/2 ${
                          menuClosing ? "animate-dropdown-out" : "animate-dropdown-in"
                        }`}
                      >
                        {/* Caret */}
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 rotate-45 w-2.5 h-2.5 bg-card border-t border-l border-hairline/80 z-10" />
                        <div className="relative bg-card border border-hairline/80 rounded-lg shadow-2xl overflow-hidden">
                          {/* Header */}
                          <div className="p-4 border-b border-hairline/50 bg-gradient-to-r from-ivory to-card">
                            <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-terracotta">
                              {item.label}
                            </p>
                            <p className="font-sans text-xs text-ink/50 mt-1 font-light leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          {/* Links */}
                          <div className="p-2 space-y-0.5">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="group/link flex items-center gap-2.5 p-2.5 rounded-md no-underline hover:bg-ivory/80 transition-colors duration-200"
                              >
                                <span className="w-1 h-4 rounded-xs bg-transparent group-hover/link:bg-gold transition-colors duration-200 shrink-0" />
                                <span className="font-sans text-xs font-medium text-ink/80 group-hover/link:text-navy tracking-wide flex-grow transition-colors duration-200">
                                  {child.label}
                                </span>
                                <svg
                                  className="w-3.5 h-3.5 text-transparent group-hover/link:text-gold group-hover/link:translate-x-0.5 transition-all duration-200 shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* ─── Right: CTA + Mobile Hamburger Button ────────────── */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Desktop CTA */}
              <Link
                href="/get-involved"
                className={`hidden lg:inline-flex font-sans items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.12em] font-bold no-underline rounded-xs transition-all duration-300 ${
                  showTransparent
                    ? "bg-white/10 text-white border border-white/20 hover:bg-gold hover:text-navy hover:border-gold"
                    : "bg-navy text-ivory border border-navy hover:bg-gold hover:text-navy hover:border-gold"
                }`}
              >
                Get Involved
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>

              {/* ─── Minimalist Premium Hamburger Button ────────────── */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden relative z-50 flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300 active:scale-95 focus:outline-none ${
                  mobileMenuOpen
                    ? "bg-navy text-ivory border-navy shadow-md"
                    : showTransparent
                    ? "bg-white/10 text-white border-white/20 backdrop-blur-md hover:bg-white/20"
                    : "bg-card text-navy border-hairline hover:border-gold/40 shadow-xs"
                }`}
                aria-label="Toggle Navigation Menu"
              >
                <div className="w-5 flex flex-col justify-center items-center gap-1.5">
                  {/* Top Line */}
                  <span
                    className={`block h-0.5 bg-current rounded-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      mobileMenuOpen
                        ? "w-5 translate-y-[4px] rotate-45"
                        : "w-5"
                    }`}
                  />
                  {/* Middle Line */}
                  <span
                    className={`block h-0.5 bg-current rounded-full transition-all duration-300 ease-out ${
                      mobileMenuOpen ? "w-0 opacity-0" : "w-3.5 self-start"
                    }`}
                  />
                  {/* Bottom Line */}
                  <span
                    className={`block h-0.5 bg-current rounded-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      mobileMenuOpen
                        ? "w-5 -translate-y-[4px] -rotate-45"
                        : "w-5"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Premium Mobile Drawer Overlay ─────────────────────── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-ivory/98 backdrop-blur-2xl animate-fade-in overflow-hidden">
          {/* Subtle Background Accent Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none -mt-20 -mr-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-terracotta/5 rounded-full blur-3xl pointer-events-none -mb-20 -ml-20" />

          {/* Drawer Content */}
          <div className="relative z-10 flex-1 flex flex-col justify-between pt-24 pb-8 px-6 sm:px-8 overflow-y-auto safe-bottom">
            
            {/* Top Navigation Links */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-hairline/60 pb-3">
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold font-bold">
                  Navigation
                </span>
                <span className="text-[10px] font-sans text-ink/40 tracking-wider">
                  IAIF &bull; Bengaluru
                </span>
              </div>

              <nav className="space-y-2">
                {NAV_ITEMS.map((item, idx) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isActive = pathname === item.href;
                  const isExpanded = expandedItem === idx;

                  return (
                    <div
                      key={item.label}
                      className="border-b border-hairline/40 pb-3 pt-1"
                    >
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex-grow group flex items-baseline gap-3.5 no-underline"
                        >
                          <span className="font-serif text-sm font-bold text-gold/60 font-mono">
                            0{idx + 1}
                          </span>
                          <span
                            className={`font-serif text-2xl sm:text-3xl font-medium tracking-tight transition-colors duration-300 ${
                              isActive
                                ? "text-gold"
                                : "text-navy group-hover:text-gold"
                            }`}
                          >
                            {item.label}
                          </span>
                        </Link>

                        {hasChildren && (
                          <button
                            onClick={() =>
                              setExpandedItem(isExpanded ? null : idx)
                            }
                            className="p-2.5 text-gold/70 hover:text-gold transition-transform duration-300 focus:outline-none"
                            aria-label={`Toggle ${item.label} Submenu`}
                          >
                            <svg
                              className={`w-5 h-5 transition-transform duration-300 ${
                                isExpanded ? "rotate-180 text-gold" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </button>
                        )}
                      </div>

                      <p className="font-sans text-xs text-ink/50 font-light mt-1 pl-8">
                        {item.description}
                      </p>

                      {/* Sub-links Expandable Accordion */}
                      {hasChildren && isExpanded && (
                        <div className="pl-8 pt-3 space-y-2 animate-fade-in">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center gap-2.5 py-1.5 font-sans text-sm no-underline transition-colors duration-200 ${
                                pathname === child.href
                                  ? "text-gold font-medium"
                                  : "text-ink/75 hover:text-navy"
                              }`}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0" />
                              <span>{child.label}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Footer Actions inside Drawer */}
            <div className="pt-8 space-y-5 border-t border-hairline/60 mt-6">
              <Link
                href="/get-involved"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full font-sans flex items-center justify-center gap-2.5 py-3.5 px-6 bg-navy text-ivory text-xs uppercase tracking-[0.15em] font-bold no-underline rounded-xs border border-navy shadow-md hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300 active:scale-[0.99]"
              >
                Get Involved
                <svg
                  className="w-4 h-4 text-gold"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>

              <div className="flex items-center justify-between text-xs font-sans text-ink/60">
                <div>
                  <a
                    href={`mailto:${SITE.social.email}`}
                    className="font-medium text-navy no-underline hover:text-gold transition-colors"
                  >
                    {SITE.social.email}
                  </a>
                  <p className="text-[11px] text-ink/40 font-light mt-0.5">
                    Hebbal, Bengaluru - 560094
                  </p>
                </div>

                <div className="flex items-center gap-3 text-ink/40">
                  <a
                    href={SITE.social.linkedin}
                    className="hover:text-gold transition-colors p-1.5"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={SITE.social.whatsapp}
                    className="hover:text-gold transition-colors p-1.5"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
