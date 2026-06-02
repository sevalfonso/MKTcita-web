import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getPostBySlug, getPosts, getAllSlugs, urlFor } from '@/lib/sanity'
import { SECTORS } from '@/config/sectors'
import { PortableText } from '@portabletext/react'
import { TableOfContents } from '@/components/blog/TableOfContents'
import { AuthorBio } from '@/components/blog/AuthorBio'
import { ShareButtons } from '@/components/blog/ShareButtons'
import { RelatedPosts } from '@/components/blog/RelatedPosts'

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
      modifiedTime: new Date().toISOString(),
      authors: [`${siteUrl}`],
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: post.title }],
    },
    alternates: { canonical: `${siteUrl}/blog/${params.slug}` },
  }
}

type PortableTextBlock = {
  _type: string
  style?: string
  children?: Array<{ _type: string; text: string }>
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export default async function PostPage({ params }: Props) {
  const [post, allPosts] = await Promise.all([
    getPostBySlug(params.slug),
    getPosts(),
  ])
  if (!post) notFound()

  const sector = SECTORS.find((s) => s.id === post.sector)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mymarketing.es'

  const dateFormatted = new Date(post.publishedAt).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  // Extraer H2s del cuerpo Portable Text para el TOC
  const tocItems = (post.body as PortableTextBlock[] ?? [])
    .filter((b) => b._type === 'block' && b.style === 'h2')
    .map((b) => {
      const text = b.children?.map((c) => c.text).join('') ?? ''
      return { id: slugifyHeading(text), text }
    })
    .filter((h) => h.text.length > 0)

  // Custom PortableText components para añadir id a los H2
  const portableComponents = {
    block: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      h2: ({ children, value }: { children?: React.ReactNode; value: any }) => {
        const text = (value.children ?? [])
          .map((c: { text?: string }) => c.text ?? '')
          .join('')
        return <h2 id={slugifyHeading(text)}>{children}</h2>
      },
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any

  // Posts relacionados: excluir el actual, máximo 2
  // En runtime p.slug es string (la query GROQ proyecta slug.current)
  const currentSlug = params.slug
  const relatedPosts = allPosts
    .filter((p) => (p.slug as unknown as string) !== currentSlug)
    .slice(0, 2)
    .map((p) => {
      const s = SECTORS.find((sec) => sec.id === p.sector)
      return {
        slug: p.slug as unknown as string,
        title: p.title,
        sector: s?.label ?? p.sector,
        sectorEmoji: s?.icon ?? '',
        readingTime: p.readingTime,
      }
    })

  const schemaArticle = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${siteUrl}/blog/${params.slug}#article`,
        headline: post.title,
        description: post.excerpt,
        author: { '@type': 'Organization', name: post.author },
        datePublished: post.publishedAt,
        dateModified: new Date().toISOString(),
        publisher: {
          '@type': 'Organization',
          name: 'MyMarketing',
          '@id': `${siteUrl}/#organization`,
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/${params.slug}` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: `${siteUrl}/blog/${params.slug}` },
        ],
      },
    ],
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

          {/* Tabla de contenidos */}
          <TableOfContents headings={tocItems} />

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
              <PortableText
                value={post.body as import('@portabletext/types').PortableTextBlock[]}
                components={portableComponents}
              />
            </div>
          )}

          {/* Bio del autor */}
          <AuthorBio />

          {/* Botones de compartir */}
          <ShareButtons
            url={`${siteUrl}/blog/${params.slug}`}
            title={post.title}
          />

          {/* Artículos relacionados */}
          <RelatedPosts posts={relatedPosts} />

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
