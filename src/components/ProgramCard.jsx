import Image from "next/image";
import Link from "next/link";

export default function ProgramCard({ id, title, image, summary, category }) {
  const isSage = category === "sage";
  
  return (
    <Link
      href={`/programs#${id}`}
      className="group block bg-card border border-hairline hover:border-gold/40 transition-editorial duration-400 focus:outline-none flex flex-col justify-between h-full"
    >
      <div>
        {/* Card Image if exists */}
        {image ? (
          <div className="relative w-full aspect-video overflow-hidden border-b border-hairline">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-w-768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-103"
            />
            {/* Subtle warm overlay */}
            <div className="absolute inset-0 bg-navy/5 mix-blend-multiply transition-opacity group-hover:opacity-0" />
          </div>
        ) : (
          /* Typography-only card accent stripe */
          <div
            className={`h-1.5 w-full ${isSage ? "bg-sage" : "bg-terracotta"}`}
          />
        )}

        {/* Content */}
        <div className="p-5 sm:p-8 space-y-4">
          {/* Category Tag */}
          <span
            className={`inline-block text-[10px] font-sans uppercase tracking-[0.15em] font-bold ${
              isSage ? "text-sage" : "text-terracotta"
            }`}
          >
            {isSage ? "Academia Collaboration" : "Technical Sprint"}
          </span>

          {/* Title */}
          <h3 className="font-serif text-2xl font-medium text-navy tracking-tight group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>

          {/* Summary */}
          <p className="text-sm font-sans text-ink/70 leading-relaxed font-light">
            {summary}
          </p>
        </div>
      </div>

      {/* Read More Link */}
      <div className="px-5 sm:px-8 pb-5 sm:pb-8 pt-2">
        <span className="inline-flex items-center text-xs font-sans uppercase tracking-[0.1em] font-semibold text-navy group-hover:text-gold transition-colors">
          Explore Program
          <svg
            className="w-4 h-4 ml-1.5 transform transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
