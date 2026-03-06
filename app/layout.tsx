import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Space_Grotesk } from "next/font/google";
import "material-symbols/outlined.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const SITE_URL = "https://gprm.bhalli.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "GPRM — Free GitHub Profile README Generator | Create Professional READMEs",
    template: "%s | GPRM",
  },
  description:
    "Create stunning GitHub Profile READMEs in minutes with GPRM — the free, no-code readme generator. 500+ tech icons, dynamic GitHub stats, streak cards, premium templates & one-click markdown export. No signup required.",
  keywords: [
    // Primary high-volume keywords
    "github profile readme generator",
    "github readme generator",
    "github profile readme maker",
    "readme generator",
    "github readme maker",
    // Long-tail transactional keywords
    "free github profile readme generator online",
    "create github profile readme online",
    "github profile readme builder no code",
    "professional github profile readme creator",
    "best github readme generator 2026",
    // Feature-specific keywords
    "github readme generator with stats",
    "github readme maker with icons",
    "github profile readme template generator",
    "github readme generator with badges",
    "github stats card generator",
    "github streak stats readme",
    // Informational keywords
    "how to create github profile readme",
    "github profile customization",
    "developer portfolio readme",
    "markdown readme builder",
    // Brand keywords
    "GPRM",
    "github profile readme maker GPRM",
    "Bhalli",
    "Bhalli B",
    "Bhalli Dev",
    "Full Stack Developer"
  ],
  authors: [{ name: "GPRM Team" }],
  creator: "GPRM",
  publisher: "GPRM",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "GPRM — Free GitHub Profile README Generator",
    description:
      "Create professional, data-driven GitHub Profile READMEs in minutes. 500+ tech icons, dynamic stats, premium templates. Free & no signup.",
    type: "website",
    url: SITE_URL,
    siteName: "GPRM — GitHub Profile README Maker",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/icon.svg`,
        width: 512,
        height: 512,
        alt: "GPRM — GitHub Profile README Generator Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPRM — Free GitHub Profile README Generator",
    description:
      "Build stunning GitHub Profile READMEs in minutes. 500+ icons, stats, templates. Free & open.",
    images: [`${SITE_URL}/icon.svg`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/icon.svg",
  },
};

// JSON-LD Structured Data for SEO/AEO rich results
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "GPRM — GitHub Profile README Generator",
      url: SITE_URL,
      description:
        "Create professional, data-driven GitHub Profile READMEs in minutes with GPRM. Features 500+ tech icons, dynamic GitHub stats, streak cards, premium templates, and one-click markdown export.",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires a modern web browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@type": "Organization",
        name: "GPRM",
        url: SITE_URL,
      },
      featureList: [
        "500+ tech stack icons and badges",
        "Dynamic GitHub stats cards",
        "GitHub streak statistics",
        "Premium README templates",
        "Real-time markdown preview",
        "One-click copy to clipboard",
        "Markdown file export",
        "No signup required",
        "No-code editor",
        "Social media link integration",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is GPRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GPRM (GitHub Profile README Maker) is a free, no-code online tool that helps developers create professional, data-driven GitHub Profile READMEs in minutes. It features 500+ tech icons, dynamic GitHub stats, premium templates, and one-click markdown export.",
          },
        },
        {
          "@type": "Question",
          name: "How do I create a GitHub Profile README?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To create a GitHub Profile README with GPRM: 1) Fill in your personal info and bio, 2) Select your tech stack from 500+ icons, 3) Choose a premium template design, 4) Copy or download the generated markdown and paste it into your GitHub profile repository.",
          },
        },
        {
          "@type": "Question",
          name: "Is GPRM free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, GPRM is completely free to use. There is no signup required, no credit card needed, and no hidden fees. All features including premium templates, tech icons, and GitHub stats integration are available at no cost.",
          },
        },
        {
          "@type": "Question",
          name: "What features does GPRM offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GPRM offers: 500+ tech stack icons and badges, dynamic GitHub stats cards, streak statistics, multiple premium templates, real-time markdown preview, social media link integration, one-click copy to clipboard, and direct markdown file download.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need coding skills to use GPRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, GPRM is a no-code tool. You simply fill in your information, select your skills from the visual icon grid, choose a template, and the tool generates the markdown code for you automatically.",
          },
        },
      ],
    },
    {
      "@type": "Organization",
      name: "GPRM",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      description:
        "GPRM is the leading free GitHub Profile README Generator, helping developers create professional profile READMEs with ease.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-background-dark font-display`}
      >
        <div className="relative min-h-screen w-full flex flex-col overflow-x-clip grid-pattern">
          <Header />
          <main className="flex-1">
            {children}
            <Analytics />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
