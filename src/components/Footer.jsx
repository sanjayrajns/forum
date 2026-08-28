import Link from "next/link";
import { SITE, NAV_ITEMS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory/80 pt-12 md:pt-20 pb-12 safe-bottom border-t border-hairline/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 pb-12 md:pb-16 border-b border-hairline/10">
          {/* Logo & Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                {SITE.name}
              </span>
              <span className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gold font-semibold mt-0.5">
                Industry-Academia Interaction Forum
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-ivory/70 font-sans">
              A volunteer-driven collective bridging the inherent gap between academic curricula and industrial expectations in Bharat.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold font-sans">
              Organization
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold font-sans">
              Headquarters
            </h4>
            <address className="not-italic text-sm text-ivory/70 space-y-2 font-sans">
              <p>{SITE.address.line1}</p>
              <p>{SITE.address.line2}</p>
              <p>{SITE.address.line3}</p>
              <p className="pt-2">
                <a
                  href={`mailto:${SITE.social.email}`}
                  className="hover:text-white transition-colors underline underline-offset-4 decoration-gold"
                >
                  {SITE.social.email}
                </a>
              </p>
            </address>
          </div>

          {/* Vision Statement Tag */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold font-sans">
              The Mission
            </h4>
            <p className="text-xs italic leading-relaxed text-ivory/60 font-sans">
              &ldquo;To facilitate the transformation of Bharat into an Atmanirbhar (Self-Sufficient) and Samartha (Capable) nation by empowering its greatest asset — the student.&rdquo;
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-ivory/50 font-sans">
          <p>
            &copy; {new Date().getFullYear()} Industry-Academia Interaction Forum. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/programs" className="hover:text-ivory transition-colors">
              Our Programs
            </Link>
            <Link href="/about#values" className="hover:text-ivory transition-colors">
              The IAIF Code
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
