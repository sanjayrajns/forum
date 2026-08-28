"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Institution",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          role: formData.role,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", role: "Institution", message: "" });
      } else {
        const data = await res.json();
        setError(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-24 space-y-0">
      {/* Page Header */}
      <section className="bg-card py-12 md:py-20 border-b border-hairline overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-bold">
              Reach Out
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-navy tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg font-sans text-ink/75 leading-relaxed font-light pt-2 max-w-2xl">
              Have questions about volunteering, institutional partnerships, or registering a facility? Drop us a line, and our Bengaluru team will connect with you.
            </p>
          </div>
        </div>
      </section>

      {/* Split Layout Section */}
      <section className="py-16 md:py-24 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Contact Form Column (7 cols) */}
            <div className="lg:col-span-7 bg-card border border-hairline p-6 md:p-10">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <span className="text-gold text-4xl block">✓</span>
                  <h3 className="font-serif text-2xl font-medium text-navy">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm font-sans text-ink/75 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to IAIF. One of our volunteer coordinators will review your query and contact you within 2-3 business days.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-sans uppercase tracking-wider text-terracotta border-b border-terracotta mt-4 font-semibold"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="font-serif text-2xl font-medium text-navy tracking-tight mb-4">
                    Send a Message
                  </h2>

                  <p className="text-xs font-sans text-ink/60 leading-relaxed italic border-l-2 border-gold/40 pl-3">
                    Instruction: Please articulate your query and specific ask from us. Pls share your contact number too in case we need to speak to you to better understand your query/ask.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-sans uppercase tracking-wider text-navy font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-ivory border border-hairline text-ink text-sm font-sans focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-sans uppercase tracking-wider text-navy font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-ivory border border-hairline text-ink text-sm font-sans focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-sans uppercase tracking-wider text-navy font-semibold mb-2">
                        Phone / Contact Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-ivory border border-hairline text-ink text-sm font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-ink/30"
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-xs font-sans uppercase tracking-wider text-navy font-semibold mb-2">
                        I am registering as:
                      </label>
                      <select
                        name="role"
                        id="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-ivory border border-hairline text-ink text-sm font-sans focus:outline-none focus:border-gold transition-colors"
                      >
                        <option value="Institution">Academic Institution</option>
                        <option value="Facility">Industry / Research Facility</option>
                        <option value="Expert">Volunteer Expert</option>
                        <option value="Partner">Corporate / CSR Partner</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-sans uppercase tracking-wider text-navy font-semibold mb-2">
                      Specific Query &amp; Articulated Ask *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows="5"
                      placeholder="Please details your request, objective, and specific ask..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-ivory border border-hairline text-ink text-sm font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-ink/30"
                    />
                  </div>

                  {error && (
                    <p className="text-xs font-sans text-red-600 border border-red-200 bg-red-50 px-4 py-3 leading-relaxed">
                      {error}
                    </p>
                  )}

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-navy text-ivory text-xs font-sans uppercase tracking-[0.15em] font-semibold border border-navy hover:bg-transparent hover:text-navy hover:border-gold transition-editorial duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-navy disabled:hover:text-ivory disabled:hover:border-navy"
                    >
                      {loading ? (
                        <span className="inline-flex items-center justify-center gap-2">
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Submit Query"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Office Info & Custom Map Column (5 cols) */}
            <div className="lg:col-span-5 space-y-10">
              {/* Office Address */}
              <div className="bg-card border border-hairline p-6 md:p-8 space-y-6">
                <h2 className="font-serif text-2xl font-medium text-navy tracking-tight">
                  Headquarters
                </h2>
                <address className="not-italic text-sm font-sans text-ink/75 space-y-3 leading-relaxed font-light">
                  <p className="font-semibold text-navy">House of Hiranandani Hebbal</p>
                  <p>{SITE.address.line2}</p>
                  <p>{SITE.address.line3}</p>
                </address>

                <div className="border-t border-hairline pt-4 text-xs font-sans text-ink/50 space-y-2">
                  <p>
                    <span className="font-semibold text-navy">Direct Email:</span>{" "}
                    <a
                      href={`mailto:${SITE.social.email}`}
                      className="hover:text-gold transition-colors underline"
                    >
                      {SITE.social.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Custom Desaturated Map Placeholder */}
              <div className="bg-card border border-hairline p-6 md:p-8 space-y-6 relative overflow-hidden aspect-[4/3] flex flex-col justify-between">
                <div className="absolute inset-0 bg-navy/[0.02] z-0" />
                <div className="relative z-10">
                  <h3 className="font-serif text-lg font-medium text-navy tracking-tight">
                    Bengaluru Hub
                  </h3>
                  <span className="text-[10px] font-sans uppercase tracking-widest text-terracotta font-bold">
                    Hebbal, Bengaluru
                  </span>
                </div>

                <div className="relative z-10 text-center py-6">
                  <p className="text-xs font-sans text-ink/40 max-w-xs mx-auto leading-relaxed">
                    A styled, highly-desaturated map visualization centered on Devinagar Bengaluru will load here.
                  </p>
                </div>

                <div className="relative z-10 border-t border-hairline/60 pt-4 flex justify-between text-[10px] font-sans uppercase tracking-wider text-ink/40">
                  <span>GPS Coordinates</span>
                  <span>13.0416° N, 77.5900° E</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
