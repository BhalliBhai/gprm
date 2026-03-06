import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GitHub README Editor — Build Your Profile README",
  description:
    "Build your GitHub Profile README with GPRM's interactive no-code editor. Choose from 500+ tech icons, add GitHub stats and streak cards, select premium templates, and export clean markdown in one click.",
  keywords: [
    "github readme editor",
    "build github profile readme",
    "github readme builder online",
    "no-code readme editor",
    "github profile editor",
    "readme markdown editor",
    "github readme creator tool",
  ],
  openGraph: {
    title: "GitHub README Editor — Build Your Profile README | GPRM",
    description:
      "Interactive no-code editor — 500+ icons, stats, templates. Build & export your GitHub README in minutes.",
  },
};

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
