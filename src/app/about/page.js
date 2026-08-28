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

          <div className="space-y-12 md:space-y-16">
            {[
              {
                name: "Shivanand Hiremath",
                role: "Core Member",
                titleSub: "SAP Innovation & AI Architect | 28+ Years IT Experience",
                bio: "SAP Innovation & AI Strategist with 28+ years of IT experience. He shapes roadmaps and use cases working with business leaders, architects AI & automation-infused solutions, drives co-innovation with SAP, owns market-ready Validation Partner Use Cases (VPUCs), and leads end-to-end deployment via an 'Adopt & Adapt' methodology.",
                subBio: "He hosts Customer Leadership & C-suite steering AI strategy discussions to convert vision into measurable value considering Desirability, Viability, and Feasibility, while managing Analyst Relations to shape market narratives and influence key industry reports.",
                valueDrivers: [
                  "IIT BHU Alumni",
                  "Strategy & Consulting",
                  "Global SAP Transformation",
                  "Design Thinking",
                  "AI Strategist",
                  "AI & Automation infused solution",
                  "Mentoring & Coaching",
                ],
                image: "/images/shivanand-hiremanth.jpg",
                linkedin: "https://www.linkedin.com/in/shivanand-hiremath-7a75695",
              },
              {
                name: "Dr. Jayesh Barve",
                role: "Core Member",
                titleSub: "FNAE, ISA Fellow | Leading Researcher at GE Vernova Advanced Research",
                bio: "Dr. Jayesh Barve (FNAE, ISA Fellow) is a leading researcher at GE Vernova Advanced Research, Bangalore, with over 32 years of combined experience spanning industrial R&D (>18 years) and academia (>14 years). He holds a PhD and MTech in Systems & Controls from IIT Bombay and a BE from Gujarat University.",
                subBio: "Specializing in industrial controls, optimization, IIoT, digital twin, and smart systems, Dr. Barve has led major global technology projects across power generation, renewables, oil & gas, and manufacturing — delivering ~20 commercialized technologies, over 21 patents, and 51+ published papers. His academic tenure includes roles as Director and Professor at Adani Institute and Nirma University, guiding over 80 PhD, PG, and UG projects. Active in IEEE, ISA, and IFAC, he holds prestigious global leadership awards alongside INAE and ISA Fellowships.",
                valueDrivers: [
                  "32+ Yrs Experience (R&D & Academia)",
                  "IIT Bombay PhD & MTech",
                  "21+ Patents & 20 Commercialized Tech",
                  "51+ Research Papers",
                  "INAE & ISA Fellow",
                ],
                image: "/images/jayesh-barve.jpg",
                linkedin: "https://www.linkedin.com/in/dr-jayesh-barve-90445323",
              },
            ].map((member, idx) => (
              <SectionReveal key={member.name} delay={idx * 100}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                  {/* Left Card: Image */}
                  <div className="lg:col-span-5 bg-card border border-hairline relative min-h-[300px] sm:min-h-[360px] overflow-hidden group hover:border-gold/40 transition-all duration-300 shadow-sm flex items-center justify-center">
                    {member.image ? (
                      <>
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          quality={95}
                          sizes="(max-width: 1024px) 100vw, 500px"
                          className="object-cover object-center filter saturate-[0.95] contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-navy/5 mix-blend-multiply pointer-events-none" />
                      </>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-card via-ivory to-card text-center space-y-4">
                        <div className="w-24 h-24 rounded-full border-2 border-gold/40 bg-navy/5 flex items-center justify-center font-serif text-3xl text-navy font-bold">
                          {member.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <span className="text-xs font-sans uppercase tracking-[0.15em] text-navy/40 font-semibold">
                          IAIF Core Member
                        </span>
                      </div>
                    )}
                    {/* Golden accent corners */}
                    <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-gold/60" />
                    <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-gold/60" />
                    <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-gold/60" />
                    <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-gold/60" />
                  </div>

                  {/* Right Card: Content */}
                  <div className="lg:col-span-7 bg-card border border-hairline p-8 md:p-10 space-y-6 flex flex-col justify-between hover:border-gold/40 transition-all duration-300 shadow-sm">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-0.5 bg-terracotta" />
                        <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-terracotta font-bold">
                          {member.role}
                        </span>
                      </div>
                      <h3 className="font-serif text-3xl md:text-4xl font-medium text-navy tracking-tight">
                        {member.name}
                      </h3>
                      {member.titleSub && (
                        <p className="text-xs font-sans uppercase tracking-wider text-gold font-bold">
                          {member.titleSub}
                        </p>
                      )}
                      <p className="text-sm sm:text-base font-sans text-ink/80 leading-relaxed font-light">
                        {member.bio}
                      </p>
                      {member.subBio && (
                        <p className="text-sm sm:text-base font-sans text-ink/75 leading-relaxed font-light">
                          {member.subBio}
                        </p>
                      )}
                      {member.valueDrivers && member.valueDrivers.length > 0 && (
                        <div className="pt-2 space-y-2">
                          <span className="text-[10px] font-sans uppercase tracking-[0.15em] text-navy/50 font-bold block">
                            Focused Value Drivers:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {member.valueDrivers.map((driver) => (
                              <span
                                key={driver}
                                className="inline-block text-[11px] font-sans px-2.5 py-1 bg-ivory border border-hairline text-navy/80 font-medium rounded-xs"
                              >
                                {driver}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {member.linkedin ? (
                      <div className="pt-6 border-t border-hairline/60">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-navy text-ivory text-xs font-sans uppercase tracking-wider font-semibold hover:bg-gold hover:text-navy transition-all duration-300"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                          LinkedIn Profile
                        </a>
                      </div>
                    ) : (
                      <div className="pt-6 border-t border-hairline/60">
                        <span className="text-[11px] font-sans uppercase tracking-wider text-navy/40 font-semibold">
                          IAIF Volunteer Leader
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
