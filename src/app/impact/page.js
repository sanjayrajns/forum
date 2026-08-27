import StatCounter from "@/components/StatCounter";
import ValueProposition from "@/components/ValueProposition";
import SectionReveal from "@/components/SectionReveal";
import { IMPACT_STATS, EXECUTION_STRATEGY } from "@/lib/constants";

export default function ImpactPage() {
  return (
    <div className="pt-24 space-y-0">
      {/* Page Header */}
      <section className="bg-card py-16 md:py-20 border-b border-hairline overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-bold">
              Evidence &amp; Agility
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-navy tracking-tight">
              Impact &amp; Transparency
            </h1>
            <p className="text-lg font-sans text-ink/75 leading-relaxed font-light pt-2 max-w-2xl">
              We track our success not by hours volunteered, but by the
              structural agility of the academic institutions we support, the
              character of the student leaders we build, and our adherence to
              national growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      {/* <section className="py-16 md:py-24 bg-ivory border-b border-hairline overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <h2 className="font-serif text-3xl font-medium text-navy tracking-tight text-center">
            Key Indicators
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {IMPACT_STATS.map((stat, idx) => (
              <SectionReveal key={idx} delay={idx * 100}>
                <div className="bg-card border border-hairline p-8 rounded-sm">
                  <StatCounter
                    targetValue={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* Before / After Module */}
      <section className="py-16 md:py-32 bg-card border-b border-hairline overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-bold">
              Systemic Shift
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy tracking-tight">
              The Paradigm Shift
            </h2>
            <p className="text-sm font-sans text-ink/60 leading-relaxed font-light">
              Bridging the gap to move student mindsets from rote academic
              compliance to high-value industrial execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before (Traditional) */}
            <div className="bg-ivory border border-hairline p-8 space-y-6">
              <span className="text-[10px] font-sans uppercase tracking-widest text-ink/50 font-bold">
                Conventional Framework
              </span>
              <h3 className="font-serif text-2xl font-medium text-ink/80 tracking-tight">
                Academic Inertia
              </h3>
              <ul className="space-y-4 text-sm font-sans text-ink/70 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-terracotta font-bold">✕</span>
                  <span>
                    Rote memorization focused entirely on passing written exams.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-terracotta font-bold">✕</span>
                  <span>
                    Course syllabus decoupled from rapidly shifting industry
                    stacks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-terracotta font-bold">✕</span>
                  <span>
                    Limited mentoring access, skewing benefits to Tier 1 cities
                    only.
                  </span>
                </li>
              </ul>
            </div>

            {/* After (IAIF Model) */}
            <div className="bg-navy text-white p-8 space-y-6">
              <span className="text-[10px] font-sans uppercase tracking-widest text-gold font-bold">
                The IAIF Loop
              </span>
              <h3 className="font-serif text-2xl font-medium text-white tracking-tight">
                Samartha Bharat Skills
              </h3>
              <ul className="space-y-4 text-sm font-sans text-ivory/80 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-gold font-bold">✓</span>
                  <span>
                    Credit-equivalence projects focusing on hands-on prototype
                    builds.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold font-bold">✓</span>
                  <span>
                    Board of Studies reps aligning curriculums to global MNC
                    standards.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold font-bold">✓</span>
                  <span>
                    Train-the-Trainer loops scaling skills to Tier 2 &amp; 3
                    institutions.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Value Proposition & Stakeholder Advantage */}
      <section
        id="value-proposition"
        className="py-12 md:py-28 bg-ivory/60 border-b border-hairline overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4">
            <span className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-bold">
              Strategic Synergy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-navy tracking-tight leading-tight">
              The Value Proposition &amp; <br className="hidden sm:inline" />
              <span className="italic font-normal text-gold">
                The Stakeholder Advantage
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-sans text-ink/75 leading-relaxed font-light px-2 sm:px-0">
              Structured outcomes and strategic alignment across students,
              academic institutions, and industry leaders to build a
              self-reliant Bharat.
            </p>
          </div>

          <ValueProposition />
        </div>
      </section>

      {/* Core Execution Strategy */}
      <section
        id="strategy"
        className="py-16 md:py-32 bg-ivory border-b border-hairline overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-bold">
              Our Methodology
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy tracking-tight">
              Execution Strategy
            </h2>
            <p className="text-sm font-sans text-ink/60 leading-relaxed font-light">
              Five tactical pillars ensuring sustainable development, policy
              alignment, and national contribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {EXECUTION_STRATEGY.map((strat, idx) => (
              <SectionReveal key={idx} delay={idx * 100}>
                <div className="bg-card border border-hairline p-8 h-full space-y-4 hover:border-gold/30 transition-editorial duration-300">
                  <span className="font-serif text-gold text-lg font-bold block">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-navy tracking-tight">
                    {strat.title}
                  </h3>
                  <p className="text-xs font-sans text-ink/75 leading-relaxed font-light">
                    {strat.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
