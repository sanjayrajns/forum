import Image from "next/image";
import { TESTIMONIAL } from "@/lib/constants";

export default function Testimonial() {
  return (
    <section className="bg-card py-14 md:py-24 border-y border-hairline overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Image */}
          <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-square w-full max-w-md mx-auto lg:max-w-none border border-hairline bg-ivory">
            <Image
              src={TESTIMONIAL.image}
              alt="Portrait of an Indian engineering student smiling confidently"
              fill
              sizes="(max-w-768px) 100vw, 40vw"
              className="object-cover filter saturate-[0.85] contrast-[1.02]"
            />
            {/* Elegant warm-tint border decoration */}
            <div className="absolute -inset-4 border border-gold/15 pointer-events-none -z-10 translate-x-2 translate-y-2" />
          </div>

          {/* Quote Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Quote Mark / Label */}
            <span className="inline-block text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-bold">
              Voices of Bharat
            </span>

            {/* Quote Text */}
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-navy font-light leading-relaxed tracking-tight">
              &ldquo;{TESTIMONIAL.quote}&rdquo;
            </blockquote>

            {/* Author info */}
            <div>
              <cite className="not-italic font-sans text-base font-semibold text-navy block">
                {TESTIMONIAL.name}
              </cite>
              <span className="text-xs font-sans uppercase tracking-wider text-ink/60 mt-1 block">
                {TESTIMONIAL.context}
              </span>
            </div>

            {/* Small accent divider */}
            <div className="w-16 h-px bg-gold/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
