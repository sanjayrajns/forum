import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata = {
  title: "IAIF — Industry-Academia Interaction Forum",
  description:
    "Bridging Industry and Research Experts with Academia — a collective of distinguished professionals volunteering expertise to skill students to be industry-ready.",
  keywords: [
    "NGO",
    "Industry Academia",
    "Education",
    "Volunteer",
    "Bharat",
    "India",
    "Skills Development",
    "Research",
    "Entrepreneurship",
    "Hackathons",
    "Ideathons",
  ],
  authors: [{ name: "IAIF" }],
  robots: "index, follow",
  openGraph: {
    title: "IAIF — Industry-Academia Interaction Forum",
    description:
      "Bridging classroom learning with industry expectations to empower students to be industry-ready capable leaders.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  // Organization schema structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Industry-Academia Interaction Forum",
    alternateName: "IAIF",
    url: "https://iaif.org",
    logo: "https://iaif.org/images/logo.png",
    description:
      "Bridging Industry and Research Experts with Academia — a collective of distinguished professionals volunteering expertise to skill students to be industry-ready.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "House of Hiranandani Hebbal, Kodigehalli Main Road, Devinagar",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560094",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/company/iaif",
      "https://www.instagram.com/iaif",
      "https://whatsapp.com/channel/iaif",
    ],
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} scroll-smooth`}
      data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ivory text-ink font-sans flex flex-col min-h-screen selection:bg-navy/10 selection:text-navy">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
