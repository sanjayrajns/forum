import Link from "next/link";
import Hero from "@/components/Hero";
import StatCounter from "@/components/StatCounter";
import ProgramCard from "@/components/ProgramCard";
import Testimonial from "@/components/Testimonial";
import ScrollCarousel from "@/components/ScrollCarousel";
import SectionReveal from "@/components/SectionReveal";
import { SITE, IMPACT_STATS, PROGRAMS } from "@/lib/constants";

// Metadata for SEO
export const metadata = {
  title: "IAIF — Industry-Academia Interaction Forum",
  description:
    "Bridging Industry and Research Experts with Academia — empowering students for entrepreneurship and research to be industry ready.",
};

export default function Home() {
  // Select 3 featured programs for the homepage grid
  const featuredPrograms = PROGRAMS.filter((p) => p.image).slice(0, 3);

  return (
    <div className="space-y-0">
      {/* 1. Full-bleed Hero */}
      <Hero />

      {/* 2. Editorial Intro Statement */}
      <section className="bg-ivory py-16 border-b border-hairline overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <SectionReveal>
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-bold">
              The Need for Synergy
            </span>
          </SectionReveal>
          <SectionReveal delay={100}>
            <p className="font-serif text-3xl md:text-5xl text-navy font-light leading-relaxed tracking-tight max-w-3xl mx-auto">
              &ldquo;While the world’s leading economies thrive on a rigorous
              interaction between industrial capital and intellectual capital,
              this synergy is still evolving in Bharat.&rdquo;
            </p>
          </SectionReveal>
          <SectionReveal delay={200}>
            <p className="text-base font-sans text-ink/70 max-w-xl mx-auto leading-relaxed font-light">
              We are a collective of highly skilled professionals volunteering
              our expertise to bridge this inherent gap, building not just
              careers, but an industry &amp; nation-ready workforce.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* 3. Impact Stat Band */}
      {/* <section className="bg-card py-12 md:py-20 border-b border-hairline overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {IMPACT_STATS.map((stat, idx) => {
              // Custom borders to form a cross-hair grid on mobile, and vertical lines on desktop
              const mobileBorderClasses = 
                idx === 0 ? "border-r border-b border-hairline pb-8 pr-4" :
                idx === 1 ? "border-b border-hairline pb-8 pl-4" :
                idx === 2 ? "border-r border-hairline pt-8 pr-4" :
                "pt-8 pl-4";

              const desktopBorderClasses = 
                idx === 0 ? "lg:border-r lg:border-b-0 lg:pb-0 lg:pr-8 lg:pt-0 lg:pl-0" :
                idx === 1 ? "lg:border-r lg:border-b-0 lg:pb-0 lg:pl-8 lg:pr-8 lg:pt-0" :
                idx === 2 ? "lg:border-r lg:border-b-0 lg:pb-0 lg:pl-8 lg:pr-8 lg:pt-0" :
                "lg:border-0 lg:pb-0 lg:pl-8 lg:pt-0";

              return (
                <div
                  key={stat.label}
                  className={`${mobileBorderClasses} ${desktopBorderClasses}`}
                >
                  <SectionReveal delay={idx * 100}>
                    <StatCounter
                      targetValue={stat.value}
                      suffix={stat.suffix}
                      label={stat.label}
                    />
                  </SectionReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* 4. Featured Programs */}
      <section className="py-8 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-hairline pb-8">
            <div className="space-y-4">
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-bold">
                Our Initiatives
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy tracking-tight">
                Featured Programs
              </h2>
            </div>
            <p className="text-sm font-sans text-ink/60 max-w-sm mt-4 md:mt-0 leading-relaxed font-light">
              Bridging academic curricula and corporate expectations through
              targeted, expert-led engagements.
            </p>
          </div>

          {/* Asymmetric Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPrograms.map((program, idx) => (
              <SectionReveal
                key={program.id}
                delay={idx * 150}
                className="h-full">
                <ProgramCard
                  id={program.id}
                  title={program.title}
                  image={program.image}
                  summary={program.summary}
                  category={program.category}
                />
              </SectionReveal>
            ))}
          </div>

          {/* View All CTAs */}
          <div className="text-center pt-8">
            <SectionReveal>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-navy text-navy text-xs font-sans uppercase tracking-[0.1em] font-semibold hover:bg-navy hover:text-ivory transition-editorial duration-300">
                View All 9 Programs
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 5. Story / Testimonial */}
      <Testimonial />

      {/* 6. Horizontal Scroll-Snap Carousel */}
      <ScrollCarousel />
    </div>
  );
}
