"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-card py-20 border-t border-hairline overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <span className="text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-bold">
          The IAIF Dispatch
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy tracking-tight max-w-xl mx-auto leading-tight">
          Subscribe to our research &amp; project briefings
        </h2>
        <p className="text-sm font-sans text-ink/70 max-w-lg mx-auto leading-relaxed font-light">
          Stay updated on the latest academic integrations, hackathon outcomes, policy shifts, and student leadership stories in Bharat. No spam. Only data-driven progress.
        </p>

        {submitted ? (
          <div className="p-4 bg-ivory border border-gold/30 text-navy text-sm font-sans max-w-md mx-auto rounded-sm animate-fade-in font-medium">
            Thank you. You have been subscribed to our quarterly reports.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your professional email address"
              required
              className="flex-grow px-4 py-3 bg-ivory border border-hairline text-ink text-sm font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-ink/40"
              aria-label="Email Address for newsletter"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-navy text-ivory text-xs font-sans uppercase tracking-[0.1em] font-semibold hover:bg-transparent hover:text-navy border border-navy hover:border-gold transition-editorial duration-300 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
