"use client";

import SectionReveal from "@/components/SectionReveal";
import WhoWeServe from "@/components/WhoWeServe";
import { JOIN_PATHS } from "@/lib/constants";

export default function GetInvolvedPage() {
  return (
    <div className="pt-24 space-y-0">
      {/* Page Header */}
      <section className="bg-card py-12 md:py-20 border-b border-hairline overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-bold">
              Join the Movement
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-navy tracking-tight">
              Get Involved
            </h1>
            <p className="text-lg font-sans text-ink/75 leading-relaxed font-light pt-2 max-w-2xl">
              Whether you are an educator looking to innovate or an industry leader wanting to give back, IAIF is your platform. Register your institution or volunteer your expertise &mdash; together, let&apos;s bridge the gap between industry and academia.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Entry Pathways */}
      <section className="py-14 md:py-24 bg-ivory border-b border-hairline overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JOIN_PATHS.map((path, idx) => (
              <SectionReveal key={path.id} delay={idx * 100}>
                <div
                  id={path.id}
                  className="bg-card border border-hairline p-8 flex flex-col justify-between h-full hover:border-gold/40 transition-editorial duration-300"
                >
                  <div className="space-y-4">
                    <span className="text-[10px] font-sans uppercase tracking-widest text-terracotta font-bold">
                      Path 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-navy tracking-tight">
                      {path.title}
                    </h3>
                    <p className="text-xs font-sans text-ink/70 leading-relaxed">
                      {path.description}
                    </p>
                  </div>

                  <div className="mt-8">
                    <LinkOrButton label={path.cta} id={path.id} />
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>



      {/* Who We Serve Section */}
      <WhoWeServe />
    </div>
  );
}

// Simple Helper component to trigger form alerts or navigation
function LinkOrButton({ label, id }) {
  const handleClick = () => {
    alert(`Registration form for ${label} will open shortly. Please check contact details for immediate query submissions.`);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full py-3 bg-navy text-ivory text-xs font-sans uppercase tracking-[0.1em] font-semibold text-center border border-navy hover:bg-transparent hover:text-navy hover:border-gold transition-all duration-300"
    >
      {label}
    </button>
  );
}
