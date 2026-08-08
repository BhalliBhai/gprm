import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: ["remark-gfm"],
    providerImportSource: "@mdx-js/react",
  },
});

const nextConfig: NextConfig = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: "https", hostname: "komarev.com" },
      { protocol: "https", hostname: "img.shields.io" },
      { protocol: "https", hostname: "github-readme-stats-eight-theta.vercel.app" },
      { protocol: "https", hostname: "github-profile-trophy-mu.vercel.app" },
      { protocol: "https", hostname: "github-readme-streak-stats.herokuapp.com" },
      { protocol: "https", hostname: "github-readme-activity-graph.vercel.app" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
      { protocol: "https", hostname: "www.google.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/editor",
        destination: "/generator",
        permanent: true,
      },
    ];
  },
});

export default nextConfig;
