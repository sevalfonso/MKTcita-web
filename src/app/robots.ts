import type { MetadataRoute } from 'next'

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mymarketing.es'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Bots de búsqueda tradicional
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/dashboard/'],
      },
      // Crawlers de modelos de lenguaje — acceso explícito
      { userAgent: 'GPTBot',                allow: '/' },
      { userAgent: 'ChatGPT-User',          allow: '/' },
      { userAgent: 'ClaudeBot',             allow: '/' },
      { userAgent: 'anthropic-ai',          allow: '/' },
      { userAgent: 'Google-Extended',       allow: '/' },
      { userAgent: 'PerplexityBot',         allow: '/' },
      { userAgent: 'Applebot-Extended',     allow: '/' },
      { userAgent: 'cohere-ai',             allow: '/' },
      { userAgent: 'meta-externalagent',    allow: '/' },
      { userAgent: 'Bytespider',            allow: '/' },
      { userAgent: 'CCBot',                 allow: '/' },
      { userAgent: 'omgili',                allow: '/' },
      { userAgent: 'Diffbot',               allow: '/' },
    ],
    sitemap:  `${SITE}/sitemap.xml`,
    host:     SITE,
  }
}
