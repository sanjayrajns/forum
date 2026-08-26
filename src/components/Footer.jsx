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
            {/* Social Links */}
            <div className="flex space-x-5 pt-2">
              <a
                href={SITE.social.linkedin}
                className="text-ivory/60 hover:text-gold transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={SITE.social.instagram}
                className="text-ivory/60 hover:text-gold transition-colors duration-200"
                aria-label="Instagram Profile"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
                </svg>
              </a>
              <a
                href={SITE.social.whatsapp}
                className="text-ivory/60 hover:text-gold transition-colors duration-200"
                aria-label="WhatsApp Channel"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </a>
            </div>
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
