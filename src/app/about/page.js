import SectionReveal from "@/components/SectionReveal";
import ValueCard from "@/components/ValueCard";

import { CORE_VALUES, MISSION, VISION, SITE } from "@/lib/constants";

export const metadata = {
  title: "About Us — IAIF",
  description: "Who we are, our mission, vision, and the core values that define the Industry-Academia Interaction Foundation.",
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
              About the Foundation
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
      </section>    </div>
  );
}
