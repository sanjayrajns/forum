import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import ValueCard from "@/components/ValueCard";

import { CORE_VALUES, MISSION, VISION, SITE } from "@/lib/constants";

export const metadata = {
  title: "About Us — IAIF",
  description: "Who we are, our mission, vision, and the core values that define the Industry-Academia Interaction Forum.",
};

export default function AboutPage() {

  return (
    <div className="pt-24 space-y-0">
      {/* Page Header */}
      <section className="bg-card py-16 md:py-20 border-b border-hairline overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-bold">
              Who We Are
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-navy tracking-tight">
              About the Forum
            </h1>
            <p className="text-lg font-sans text-ink/75 leading-relaxed font-light pt-2 max-w-2xl">
              We are a collective of highly skilled and experienced professionals from premier institutions, holding distinguished positions in government bodies, academia, and industries across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Split Layout (Asymmetric 55/45) */}
      <section id="mission" className="py-16 md:py-32 bg-ivory border-b border-hairline overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Mission (55%) */}
            <div className="lg:col-span-7 space-y-8">
              <span className="text-[10px] font-sans uppercase tracking-widest text-terracotta font-bold">
                Our Mission
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy tracking-tight leading-tight">
                Aligning expectations, fostering skills, and evolving standards.
              </h2>
              <p className="text-base font-sans text-ink/80 leading-relaxed font-light">
                {MISSION.statement}
              </p>
              <div className="p-6 bg-card border-l-2 border-gold font-sans italic text-sm text-navy font-medium">
                &ldquo;{MISSION.subtext}&rdquo;
              </div>
            </div>

            {/* Vision (45%) */}
            <div className="lg:col-span-5 bg-card border border-hairline p-8 md:p-10 space-y-6">
              <span className="text-[10px] font-sans uppercase tracking-widest text-sage font-bold">
                Our Vision
              </span>
              <h3 className="font-serif text-3xl font-medium text-navy tracking-tight">
                A Self-Sufficient &amp; Capable Bharat
              </h3>
              <p className="text-sm font-sans text-ink/75 leading-relaxed font-light">
                {VISION.statement}
              </p>
              <p className="text-xs font-sans text-terracotta tracking-wider uppercase font-semibold">
                Empowering the Student Asset
              </p>
              <p className="text-xs font-sans text-ink/60 leading-relaxed font-light pt-1 border-t border-hairline">
                {VISION.subtext}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values: The IAIF Code */}
      <section id="values" className="py-16 md:py-32 bg-card border-b border-hairline overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-bold">
              The Code We Live By
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy tracking-tight">
              Our Core Values
            </h2>
            <p className="text-sm font-sans text-ink/60 leading-relaxed font-light">
              Every activity is guided by an unwavering commitment to nation-building and professional integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_VALUES.map((val, idx) => (
              <SectionReveal key={val.title} delay={idx * 100}>
                <ValueCard
                  title={val.title}
                  description={val.description}
                  icon={val.icon}
                />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Team */}
      <section id="core-team" className="py-16 md:py-32 bg-ivory border-b border-hairline overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-bold">
              The People Behind IAIF
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy tracking-tight">
              Our Core Team
            </h2>
            <p className="text-sm font-sans text-ink/60 leading-relaxed font-light">
              A distinguished group of industry veterans and academics volunteering their expertise to bridge India&apos;s industry-academia gap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Suresh Nayak */}
            <SectionReveal delay={0}>
              <div className="bg-card border border-hairline p-8 space-y-6 hover:border-gold/30 transition-all duration-300 h-full flex flex-col">
                <div className="space-y-3">
                  <div className="w-12 h-0.5 bg-terracotta" />
                  <h3 className="font-serif text-2xl font-medium text-navy tracking-tight">
                    Suresh Nayak
                  </h3>
                  <p className="text-[10px] font-sans uppercase tracking-[0.15em] text-terracotta font-bold">
                    Core Member
                  </p>
                </div>
                <p className="text-sm font-sans text-ink/70 leading-relaxed font-light flex-grow">
                  A distinguished professional committed to bridging the gap between industry and academia, volunteering expertise to empower the next generation of industry-ready leaders in Bharat.
                </p>
              </div>
            </SectionReveal>

            {/* Shivanand Hiremath */}
            <SectionReveal delay={100}>
              <div className="bg-card border border-hairline p-8 space-y-6 hover:border-gold/30 transition-all duration-300 h-full flex flex-col">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-gold/30 shadow-md">
                  <Image
                    src="/images/shivanand-hiremanth.jpg"
                    alt="Shivanand Hiremath"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-0.5 bg-terracotta" />
                  <h3 className="font-serif text-2xl font-medium text-navy tracking-tight">
                    Shivanand Hiremath
                  </h3>
                  <p className="text-[10px] font-sans uppercase tracking-[0.15em] text-terracotta font-bold">
                    Core Member
                  </p>
                </div>
                <p className="text-sm font-sans text-ink/70 leading-relaxed font-light flex-grow">
                  A seasoned industry professional with decades of experience in driving organizational excellence and mentoring young professionals toward impactful careers.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.12em] text-navy font-semibold hover:text-gold transition-colors duration-200 mt-auto"
                  aria-label="Shivanand Hiremath LinkedIn Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </SectionReveal>

            {/* Dr. Jayesh Barve */}
            <SectionReveal delay={200}>
              <div className="bg-card border border-hairline p-8 space-y-6 hover:border-gold/30 transition-all duration-300 h-full flex flex-col">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-gold/30 shadow-md">
                  <Image
                    src="/images/jayesh-barve.jpg"
                    alt="Dr. Jayesh Barve"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-0.5 bg-terracotta" />
                  <h3 className="font-serif text-2xl font-medium text-navy tracking-tight">
                    Dr. Jayesh Barve
                  </h3>
                  <p className="text-[10px] font-sans uppercase tracking-[0.15em] text-terracotta font-bold">
                    Core Member
                  </p>
                </div>
                <p className="text-sm font-sans text-ink/70 leading-relaxed font-light flex-grow">
                  An accomplished academician and researcher with deep expertise in emerging technologies and academia-industry collaboration, dedicated to shaping future innovators.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.12em] text-navy font-semibold hover:text-gold transition-colors duration-200 mt-auto"
                  aria-label="Dr. Jayesh Barve LinkedIn Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </SectionReveal>

          </div>
        </div>
      </section>
    </div>
  );
}
