import type { Metadata } from 'next'
import { getPosts } from '@/lib/sanity'
import { PostGrid } from '@/components/blog/PostGrid'
import { BrandName } from '@/components/brand/BrandName'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Blog — Consejos de marketing para profesionales',
  description:
    'Artículos prácticos para fisioterapeutas, psicólogos, peluquerías, dentistas, veterinarios y cualquier profesional que quiera crecer con la IA.',
  openGraph: {
    title: 'Blog de MyMarketing — Consejos de marketing para profesionales',
    description: 'Guías prácticas para que tu negocio aparezca en Google y en la IA.',
    images: [{ url: '/og-blog.png', width: 1200, height: 630, alt: 'Blog MyMarketing' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-blog.png'],
  },
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 sm:mb-16">
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-dark mb-4">
            Blog de <BrandName />
          </h1>
          <p className="text-neutral-700 max-w-xl mx-auto text-base sm:text-lg">
            Guías prácticas para que tu negocio aparezca en Google y en la IA.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-neutral-500 text-lg mb-2">Próximamente</p>
            <p className="text-neutral-400 text-sm">Los primeros artículos llegarán muy pronto.</p>
          </div>
        ) : (
          <PostGrid posts={posts} />
        )}
      </div>
    </div>
  )
}
