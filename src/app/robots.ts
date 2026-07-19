import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        // AI search/retrieval + training bots — explicit allow rules here
        // future-proof you: if the wildcard rule above ever gains a
        // disallow, these named agents still win (specific > wildcard).
        userAgent: [
          // OpenAI
          'OAI-SearchBot',     // ChatGPT Search citations
          'ChatGPT-User',      // user-triggered ChatGPT browsing
          'GPTBot',            // training

          // Anthropic
          'ClaudeBot',         // training/crawl
          'Claude-User',       // real-time retrieval
          'Claude-SearchBot',  // search/citations

          // Perplexity
          'PerplexityBot',
          'Perplexity-User',

          // Google
          'Google-Extended',   // Gemini/Vertex training (separate from Googlebot)
          'Google-Search-Affiliate',
          'Google-AMP-HTML-Optimizer',  // Google AMP optimization
          'Googlebot-News',
          'Googlebot-Image',
          'Googlebot-Video',
          'Googlebot',

          // Meta
          'meta-externalagent',
          'FacebookBot',

          // xAI / Grok
          'GrokBot',
          'xAI-Grok',
          'Grok-DeepSearch',

          // Microsoft
          'Microsoft-Bingbot',     // Bing search
          'Microsoft-Bing-Semantic-Search',  // Bing semantic search
          'Microsoft-Bing-Content-Discovery',  // Bing content discovery

          // Apple
          'Applebot-Extended', // Apple Intelligence

          // Amazon
          'Amazonbot',         // Alexa / Rufus / AI shopping

          // Other AI answer engines
          'DuckAssistBot',      // DuckDuckGo AI answers
          'YouBot',              // You.com
          'MistralAI-User',      // Le Chat
          'DuckAssistBot',
          'YouBot',
          'MistralAI-User'
        ],
        allow: '/',
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}