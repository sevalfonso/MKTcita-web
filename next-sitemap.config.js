/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://mymarketing.es',
  generateRobotsTxt: false, // robots.txt ya está en /public
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/studio/*'],
  additionalPaths: async (config) => {
    const legalPages = [
      { loc: '/aviso-legal', changefreq: 'yearly', priority: 0.3 },
      { loc: '/privacidad', changefreq: 'yearly', priority: 0.3 },
      { loc: '/cookies', changefreq: 'yearly', priority: 0.3 },
      { loc: '/terminos', changefreq: 'yearly', priority: 0.3 },
    ]

    // Añadir posts de Sanity al sitemap dinámicamente
    let sanityPosts = []
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
      sanityPosts = posts.map((post) => ({
        loc: `/blog/${post.slug}`,
        lastmod: post.publishedAt,
        changefreq: 'monthly',
        priority: 0.7,
      }))
    } catch {
      sanityPosts = []
    }

    return [...legalPages, ...sanityPosts]
  },
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/blog': 0.8,
      '/por-que-mymarketing': 0.8,
      '/precios': 0.8,
      '/sobre-nosotros': 0.7,
      '/testimonios': 0.6,
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
