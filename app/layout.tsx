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

export const metadata: Metadata = {
  title: "GPRM - Professional GitHub Profile README Generator",
  description: "Create professional, data-driven GitHub Profile READMEs in minutes with our intuitive generator. Stand out to employers and the community.",
  keywords: ["GitHub", "Profile README", "Generator", "Developer Portfolio", "Open Source", "Markdown", "Formatting", "SEO", "Optimization", "GPRM", "GitHub Profile README Generator", "GitHub Profile Generator", "GitHub Profile README", "GitHub Profile", "GitHub", "Profile README", "Generator", "Developer Portfolio", "Open Source", "Markdown", "Formatting", "SEO", "Optimization", "GPRM", "GitHub Profile README Generator", "GitHub Profile Generator", "GitHub Profile README Maker", "GitHub Profile Maker", "GitHub", "Profile README", "Generator", "Developer Portfolio", "Open Source", "Markdown", "Formatting", "SEO", "Optimization", "GPRM", "Bhalli", "Bhalli B", "BhalliSoft", "BhalliSoft.com", "Bhalli Soft"],
  authors: [{ name: "GPRM Team" }],
  openGraph: {
    title: "GPRM - GitHub Profile README Generator",
    description: "Create professional, data-driven READMEs in minutes.",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
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
