import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import ProgramVisual from "@/components/ProgramVisual";
import { PROGRAMS } from "@/lib/constants";

export const metadata = {
  title: "Programs & Initiatives — IAIF",
  description: "Fostering technical excellence, entrepreneurship, and ethical standards across universities in Bharat.",
};

export default function ProgramsPage() {
  const industryPrograms = PROGRAMS.filter((p) => p.category !== "sage");
  const academiaPrograms = PROGRAMS.filter((p) => p.category === "sage");

  return (
    <div className="pt-24 space-y-0">

      {/* ── Page Hero Header ───────────────────────────────────────── */}
      <section className="relative bg-navy overflow-hidden min-h-[50vh] flex items-center border-b border-gold/25">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #FBF9F5 1px, transparent 1px), linear-gradient(to bottom, #FBF9F5 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
          }}
        />
        {/* Subtle ambient accent glow */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-[500px] h-[500px] bg-gold/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-24 w-full">
          <div className="max-w-3xl space-y-8 animate-fade-up">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-3 text-xs font-sans uppercase tracking-[0.2em] text-gold font-bold bg-white/5 border border-gold/30 px-4 py-2 backdrop-blur-md">
              <span className="w-5 h-px bg-gold" />
              What We Do
            </span>

            <h1 className="font-serif text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.05]">
              Programs{" "}
              <span className="italic font-normal text-gold">&</span>{" "}
              Initiatives
            </h1>

            <p className="font-sans text-lg md:text-xl text-ivory/90 leading-relaxed max-w-2xl font-light">
              We complement the education sector with industry veteran guidance — bridging classroom theory with global expectations through structured sprints, expert lectures, and curriculum alignments.
            </p>

            {/* Jump links */}
            <div className="flex flex-wrap gap-4 pt-3">
              <Link
                href="#industry-sprints"
                className="group relative px-7 py-3.5 bg-gold/10 border border-gold/40 text-xs font-sans uppercase tracking-[0.15em] text-gold font-bold hover:bg-gold hover:text-navy transition-all duration-300 shadow-sm flex items-center gap-2.5"
              >
                <span>Industry Sprints</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
              <Link
                href="#academia-modules"
                className="group relative px-7 py-3.5 bg-white/5 border border-white/20 text-xs font-sans uppercase tracking-[0.15em] text-ivory font-bold hover:border-gold hover:text-gold transition-all duration-300 shadow-sm flex items-center gap-2.5"
              >
                <span>Academia Modules</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Index Grid ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-28 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section label */}
          <SectionReveal>
            <div className="flex items-center gap-4 mb-14">
              <span className="w-10 h-px bg-terracotta" />
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-terracotta font-bold">
                All Initiatives
              </span>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
            {PROGRAMS.map((program, idx) => {
              const isSage = program.category === "sage";
              return (
                <SectionReveal key={program.id} delay={idx * 60}>
                  <Link
                    href={`#${program.id}`}
                    className="group relative bg-card hover:bg-white transition-colors duration-300 p-8 lg:p-10 flex flex-col justify-between min-h-[260px] overflow-hidden"
                  >
                    {/* Hover line on top */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${isSage ? "bg-sage" : "bg-terracotta"}`} />

                    {/* Index number */}
                    <div className="flex items-start justify-between mb-6">
                      <span className={`text-[10px] font-sans uppercase tracking-widest font-bold px-2.5 py-1 ${isSage ? "text-sage bg-sage/8" : "text-terracotta bg-terracotta/8"}`}>
                        {isSage ? "Academia Loop" : "Industry Sprint"}
                      </span>
                      <span className="font-serif text-2xl text-navy/10 group-hover:text-gold/30 transition-colors duration-500 leading-none">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex-grow space-y-3">
                      <h3 className="font-serif text-xl md:text-2xl font-medium text-navy tracking-tight group-hover:text-navy transition-colors duration-300">
                        {program.title}
                      </h3>
                      <p className="text-sm font-sans text-ink/60 leading-relaxed font-light line-clamp-2">
                        {program.summary}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.12em] text-navy/50 group-hover:text-navy transition-colors duration-300 font-semibold">
                      <span>View Program</span>
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Industry Sprints ───────────────────────────────────────── */}
      <section id="industry-sprints" className="bg-card overflow-hidden scroll-mt-24">
        {/* Section intro band */}
        <div className="border-y border-hairline py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-terracotta font-bold">
                  Category 01
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy tracking-tight">
                  Industry Sprints
                </h2>
              </div>
              <p className="text-sm font-sans text-ink/60 max-w-md leading-relaxed font-light">
                Intensive, industry-mentored engagements designed to build real skills, real portfolios, and a Bharat-first professional character.
              </p>
            </div>
          </div>
        </div>

        {/* Program rows */}
        {industryPrograms.map((program, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <ProgramDetailRow
              key={program.id}
              program={program}
              idx={idx}
              isEven={isEven}
              accentColor="terracotta"
            />
          );
        })}
      </section>

      {/* ── Academia Modules ──────────────────────────────────────── */}
      <section id="academia-modules" className="bg-ivory overflow-hidden scroll-mt-24">
        {/* Section intro band */}
        <div className="border-y border-hairline py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-sage font-bold">
                  Category 02
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy tracking-tight">
                  Academia Modules
                </h2>
              </div>
              <p className="text-sm font-sans text-ink/60 max-w-md leading-relaxed font-light">
                Long-arc, institutionalized collaborations that embed industry relevance into the core academic framework.
              </p>
            </div>
          </div>
        </div>

        {/* Program rows */}
        {academiaPrograms.map((program, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <ProgramDetailRow
              key={program.id}
              program={program}
              idx={idx}
              isEven={isEven}
              accentColor="sage"
            />
          );
        })}
      </section>

      {/* ── CTA Band ──────────────────────────────────────────────── */}
      <section className="bg-navy py-16 md:py-28 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #FBF9F5 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-10">
          <SectionReveal>
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-gold font-bold">
              Join the Movement
            </span>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-ivory tracking-tight leading-tight">
              Ready to bridge the gap between{" "}
              <span className="italic font-normal text-gold">academia</span> and industry?
            </h2>
          </SectionReveal>
          <SectionReveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/get-involved"
                className="px-10 py-4 bg-gold text-navy text-xs font-sans uppercase tracking-[0.15em] font-bold hover:bg-ivory transition-colors duration-300 min-w-[220px] text-center"
              >
                Get Involved
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 border border-white/20 text-ivory text-xs font-sans uppercase tracking-[0.15em] font-semibold hover:border-gold hover:text-gold transition-all duration-300 min-w-[220px] text-center"
              >
                Contact Us
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}

/* ── Reusable Program Detail Row ─────────────────────────────────── */
function ProgramDetailRow({ program, idx, isEven, accentColor }) {
  const coreObjective = {
    ideathons: 'Encouraging "Bharat-First" problem-solving regarding socio-technical issues.',
    hackathons: "Building ethical, secure, functional prototypes under industry mentorship.",
    pbl: "Solving real industry problems in master's, PhD, and undergraduate projects.",
    lectures: "Inculcating integrity, corporate ethics, and advanced tech competence.",
    curriculum: "Aligning course syllabi to meet contemporary global hiring needs.",
    faculty: "Update faculty knowledge on modern industry trends and emerging technologies. Align college curricula with current market skill requirements",
    ethics: "Instilling professional integrity and ethical conduct in young leaders.",
    reading: "Collaborating with RBCL and others to support and Foster a vibrant, active community of readers. Translate reading into tangible community learning",
    club: "Establishing local campus loops to drive Atmanirbhar Bharat projects.",
  }[program.id];

  const measurableOutcome =
    program.id === "ideathons"
      ? "Clear articulation of problem statements, solution options Pitch competence, creation and soft skill improvements like Teamwork, Time Management etc"
      : program.id === "hackathons"
      ? "Functional prototype creation and character-driven student qualities to make them industry Ready"
      : program.id === "curriculum"
      ? "Improved Skill match score , campus recruitments, Internship conversions, Certificate pass rates"
      : program.id === "ethics"
      ? "Improved ethical Reasoning & decision-making, civic engagement , moral judgement, empathy, Integrity"
      : program.id === "club"
      ? "Improved Placement conversion rates, live project completion metrics, Hackathon and competition wins and professional network growth"
      : program.id === "lectures"
      ? "Ability to use real-world ideas in homework or projects, Better grasp on current Industry and Technical trends, Better Career clarity"
      : program.id === "faculty"
      ? "Course Syllabi Revised to Include New Industry Tools or Frameworks. New Case Studies, Datasets, or Practical Projects Integrated into Active Lesson Calendars"
      : program.id === "reading"
      ? "Growth of active subscriber base, Increase in participation in voluntary reading reflection programs"
      : program.category === "sage"
      ? "Institutionalized skill loop that improves placement trajectory and research depth."
      : "Functional-prototype creation, character-driven student qualities, improved skill-match scores, higher campus recruitment conversion rates, and stronger internship-to-offer outcomes.";

  const accentClass = accentColor === "sage" ? "bg-sage" : "bg-terracotta";
  const accentTextClass = accentColor === "sage" ? "text-sage" : "text-terracotta";

  return (
    <div
      id={program.id}
      className="border-b border-hairline last:border-b-0 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center`}>

          {/* Text */}
          <div className={`space-y-8 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
            <SectionReveal>
              <div className="flex items-center gap-4">
                <span className={`font-serif text-3xl italic text-gold/40 leading-none`}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="w-12 h-px bg-hairline" />
                <span className={`text-[10px] font-sans uppercase tracking-[0.2em] font-bold ${accentTextClass}`}>
                  {program.category === "sage" ? "Integrated Module" : "Sprinted Activity"}
                </span>
              </div>
            </SectionReveal>

            <SectionReveal delay={80}>
              <h3 className="font-serif text-4xl md:text-5xl font-medium text-navy tracking-tight leading-[1.1]">
                {program.title}
              </h3>
            </SectionReveal>

            <SectionReveal delay={120}>
              <p className="text-base font-sans text-ink/75 leading-relaxed font-light">
                {program.description}
              </p>
            </SectionReveal>

            {/* Objective & Outcome cards */}
            <SectionReveal delay={160}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-hairline">
                <div className="space-y-3">
                  <div className={`flex items-center gap-2.5`}>
                    <span className={`w-1 h-4 ${accentClass} rounded-full`} />
                    <h4 className={`text-[10px] font-sans uppercase tracking-[0.15em] font-bold ${accentTextClass}`}>
                      Core Objective
                    </h4>
                  </div>
                  <p className="text-sm font-sans text-ink/70 leading-relaxed font-light">
                    {coreObjective}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1 h-4 bg-gold/60 rounded-full" />
                    <h4 className="text-[10px] font-sans uppercase tracking-[0.15em] font-bold text-gold">
                      Measurable Outcome
                    </h4>
                  </div>
                  <p className="text-sm font-sans text-ink/70 leading-relaxed font-light">
                    {measurableOutcome}
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Visual */}
          <SectionReveal delay={100} className={isEven ? "lg:order-2" : "lg:order-1"}>
            <div className="relative">
              {/* Decorative offset frame */}
              <div className="absolute -top-3 -left-3 right-3 bottom-3 border border-hairline pointer-events-none" />
              <div className="relative bg-white border border-hairline overflow-hidden shadow-2xl shadow-navy/5">
                <ProgramVisual
                  id={program.id}
                  title={program.title}
                  image={program.image}
                  isSage={program.category === "sage"}
                />
              </div>
              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-4 h-4 border-t-2 border-l-2 border-gold" />
              <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b-2 border-r-2 border-gold" />
            </div>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}
