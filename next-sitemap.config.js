/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://mymarketing.es',
  generateRobotsTxt: false, // robots.txt ya está en /public
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/aviso-legal', '/privacidad', '/cookies', '/terminos', '/dpa', '/api/*'],
  additionalPaths: async (config) => {
    // Añadir posts de Sanity al sitemap dinámicamente
    try {
      const { createClient } = require('next-sanity')
      const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
        apiVersion: '2024-01-01',
        useCdn: false,
      })
      const posts = await client.fetch(
        '*[_type == "post"] { "slug": slug.current, publishedAt }'
      )
      return posts.map((post) => ({
        loc: `/blog/${post.slug}`,
        lastmod: post.publishedAt,
        changefreq: 'monthly',
        priority: 0.6,
      }))
    } catch {
      return []
    }
  },
}
