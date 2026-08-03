"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({ targetValue, suffix = "", label, delay = 0 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(targetValue);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1200; // 1.2s
          const end = parseInt(targetValue, 10);
          if (isNaN(end)) {
            setCount(targetValue);
            return;
          }
          const startTime = performance.now();

          const animate = (currentTime) => {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Ease out quad formula: f(t) = t * (2 - t)
            const easeProgress = progress * (2 - progress);
            
            const currentCount = Math.floor(easeProgress * end);
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          setTimeout(() => {
            requestAnimationFrame(animate);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [targetValue, hasAnimated, delay]);

  return (
    <div ref={elementRef} className="text-center flex flex-col items-center">
      <span className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium text-navy tracking-tight">
        {count}
        {suffix}
      </span>
      <span className="text-xs font-sans uppercase tracking-[0.2em] text-terracotta mt-2 font-semibold">
        {label}
      </span>
    </div>
  );
}
