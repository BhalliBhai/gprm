import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'komarev.com',
      },
      {
        protocol: 'https',
        hostname: 'img.shields.io',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats-eight-theta.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'github-profile-trophy-mu.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-streak-stats.herokuapp.com',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-activity-graph.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      }
    ],
  },
};

export default nextConfig;
