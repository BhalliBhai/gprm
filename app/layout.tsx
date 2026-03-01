import type { Metadata } from "next";
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
  title: "ReadmeGen - Professional GitHub Profile README Generator",
  description: "Create professional, data-driven READMEs in minutes with our intuitive generator.",
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
        <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden grid-pattern">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
