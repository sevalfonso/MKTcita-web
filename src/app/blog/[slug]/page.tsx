import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getPostBySlug, getAllSlugs, urlFor } from '@/lib/sanity'
import { SECTORS } from '@/config/sectors'
import { PortableText } from '@portabletext/react'

export const revalidate = 3600

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mymarketing.es'
  const ogImageUrl = post.ogImage?.asset
    ? urlFor(post.ogImage.asset).width(1200).height(630).url()
    : `${siteUrl}/og-blog.png`

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: post.title }],
    },
    alternates: { canonical: `${siteUrl}/blog/${params.slug}` },
  }
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  const sector = SECTORS.find((s) => s.id === post.sector)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mymarketing.es'

  const dateFormatted = new Date(post.publishedAt).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  const schemaArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: post.author },
    datePublished: post.publishedAt,
    publisher: {
      '@type': 'Organization',
      name: 'MyMarketing',
      url: siteUrl,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/${params.slug}` },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <article className="min-h-screen bg-white pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Breadcrumb */}
          <nav className="text-sm text-neutral-400 mb-8 flex items-center gap-2">
            <Link href="/blog" className="hover:text-brand-blue transition-colors">Blog</Link>
            <span aria-hidden="true">›</span>
            {sector && (
              <>
                <span>{sector.icon} {sector.label}</span>
                <span aria-hidden="true">›</span>
              </>
            )}
          </nav>

          {/* Header */}
          <header className="mb-8">
            {sector && (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-neutral-50 text-neutral-700 mb-4">
                <span aria-hidden="true">{sector.icon}</span>{sector.label}
              </span>
            )}
            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-dark leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-neutral-700 text-lg leading-relaxed mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-3 text-sm text-neutral-400">
              <time dateTime={post.publishedAt}>{dateFormatted}</time>
              {post.readingTime && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTime} min de lectura</span>
                </>
              )}
              <span aria-hidden="true">·</span>
              <span>{post.author}</span>
            </div>
          </header>

          {/* Imagen principal */}
          {post.mainImage?.asset && (
            <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden mb-10">
              <Image
                src={urlFor(post.mainImage.asset).width(900).height(500).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* CTA inline a mitad del artículo */}
          <div className="my-10 p-6 rounded-3xl bg-neutral-50 border border-neutral-100 text-center">
            <p className="font-heading font-semibold text-dark mb-2 text-lg">
              ¿Quieres que tu negocio aparezca cuando alguien te busca en la IA?
            </p>
            <p className="text-sm text-neutral-700 mb-4">
              MyMarketing lo hace de forma automática. 15 días gratis, sin tarjeta.
            </p>
            <Link
              href="https://app.mymarketing.es/onboarding"
              className="inline-flex items-center justify-center h-12 px-6 rounded-2xl bg-brand-blue text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Prueba gratis ahora
            </Link>
          </div>

          {/* Contenido */}
          {post.body && (
            <div className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:text-dark prose-a:text-brand-blue prose-strong:text-dark">
              <PortableText value={post.body as import('@portabletext/types').PortableTextBlock[]} />
            </div>
          )}

          {/* CTA final */}
          <div className="mt-16 p-8 rounded-3xl text-center" style={{ background: '#0D1117' }}>
            <p className="font-heading font-bold text-xl text-white mb-2">
              Tu competencia ya está apareciendo en la IA. ¿Y tú?
            </p>
            <p className="text-neutral-500 text-sm mb-6">
              Empieza hoy. 15 días gratis, sin tarjeta, sin compromiso.
            </p>
            <Link
              href="https://app.mymarketing.es/onboarding"
              className="inline-flex items-center justify-center h-12 px-6 rounded-2xl bg-brand-blue text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Empieza gratis
            </Link>
          </div>

        </div>
      </article>
    </>
  )
}
