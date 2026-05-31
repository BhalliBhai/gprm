import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const SITE_URL = "https://gprm.bhalli.dev";

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        // Explicitly allow AI and LLM bots for GEO/AEO
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'Claude-Web', 'PerplexityBot', 'anthropic-ai', 'OmgiliBot', 'FacebookBot'],
        allow: '/',
      }
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
