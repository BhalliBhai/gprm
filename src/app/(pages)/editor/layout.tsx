import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
 title: "GitHub README Editor | GPRM - GitHub Profile README Maker",
  description:
    "Build your GitHub Profile README with GPRM's interactive no-code editor. Choose from 500+ tech icons, add GitHub stats and streak cards, select premium templates, and export clean markdown in one click.",
  keywords: [
    "gprm",
    "github readme editor",
    "build github profile readme",
    "github readme builder online",
    "no-code readme editor",
    "github profile editor",
    "readme markdown editor",
    "github readme creator tool",
    "github stats card generator",
    "github streak stats",
    "ai readme generator",
    "github readme editor",
    "build github profile readme",
    "github readme builder online",
    "no-code readme editor",
    "github profile editor",
    "readme markdown editor",
    "github readme creator tool",
    "GitHub",
    "Markdown",
    "github profile readme",
    "github readme generator",
    "openclaw github",
    "awesome github profile readmes",
    "github profile stats",
    "github trending",
    "readme maker",
    "ai for developers",
    "readme ai",
    "ai readme generator",
    "ai documentation tool",
    "ai code description",
    "macbook neo",
    "markdown resume",
    "GitHub Profile README Generator",
    "GitHub Stats Card / README Stats",
    "Markdown Profile Generator",
    "Animated Social Badges/Icons",
    "README.md Template Generator",
    "github profile readme generator",
    "github stats card",
    "github readme stats",
    "markdown profile generator",
    "animated social badges",
    "animated social icons",
    "readme.md template generator",
  ],
  alternates: {
    canonical: "/editor",
  },
  openGraph: {
      title: "GitHub README Editor | GPRM - GitHub Profile README Maker",
      description:
        "Interactive no-code editor — 500+ icons, stats, templates. Build & export your GitHub README in minutes.",
      url: "/editor",
      type: "website",
      siteName: "GPRM — GitHub Profile README Maker",
      locale: "en_US",
      images: [
        {
          url: `${siteConfig.url}/icon.svg`,
          width: 512,
          height: 512,
          alt: "GPRM — GitHub Profile README Generator Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "GitHub README Editor | GPRM - GitHub Profile README Maker",
      description:
        "Interactive no-code editor — 500+ icons, stats, templates. Build & export your GitHub README in minutes.",
      images: [`${siteConfig.url}/icon.svg`],
    },
  };

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
