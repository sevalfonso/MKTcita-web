import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// SANITY_PROJECT_ID (sin prefijo NEXT_PUBLIC_) se usa en servidor para evitar
// el inlining en tiempo de compilación que hace Next.js con NEXT_PUBLIC_.
const projectId =
  process.env.SANITY_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  ''

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export interface Post {
  _id: string
  title: string
  slug: { current: string }
  sector: string
  excerpt: string
  mainImage?: { asset: SanityImageSource; alt: string }
  body?: unknown[]
  seoTitle?: string
  seoDescription?: string
  ogImage?: { asset: SanityImageSource }
  publishedAt: string
  author: string
  readingTime?: number
  featured: boolean
  source: 'manual' | 'ai_agent'
  approvedAt?: string
}

const POST_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  sector,
  excerpt,
  mainImage { asset, alt },
  publishedAt,
  author,
  readingTime,
  featured,
  source
`

const isSanityConfigured = () => projectId.length > 0

const fetchOptions = process.env.NODE_ENV === 'development'
  ? { cache: 'no-store' as const }
  : { next: { revalidate: 3600 } }

export async function getPosts(): Promise<Post[]> {
  if (!isSanityConfigured()) return []
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) { ${POST_FIELDS} }`,
    {},
    fetchOptions
  )
}

export async function getPostsBySector(sector: string): Promise<Post[]> {
  if (!isSanityConfigured()) return []
  return client.fetch(
    `*[_type == "post" && sector == $sector] | order(publishedAt desc) { ${POST_FIELDS} }`,
    { sector },
    fetchOptions
  )
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!isSanityConfigured()) return null
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      ${POST_FIELDS},
      body,
      seoTitle,
      seoDescription,
      ogImage { asset }
    }`,
    { slug },
    fetchOptions
  )
}

export async function getAllSlugs(): Promise<string[]> {
  if (!isSanityConfigured()) return []
  const posts = await client.fetch(
    `*[_type == "post"] { "slug": slug.current }`,
    {},
    fetchOptions
  )
  return posts.map((p: { slug: string }) => p.slug)
}

// ── PA-013: Testimonios desde Sanity CMS ──────────────────────────────────────

export interface SanityTestimonial {
  _id:         string
  name:        string
  role:        string
  location:    string
  avatarColor: string
  quote:       string
  order:       number
}

/**
 * Obtiene testimonios desde Sanity CMS.
 * Si no hay testimonios en CMS (tipo aún no creado), devuelve array vacío
 * para que el componente use su fallback estático.
 */
export async function getTestimonials(): Promise<SanityTestimonial[]> {
  if (!isSanityConfigured()) return []
  try {
    const results = await client.fetch(
      `*[_type == "testimonial"] | order(order asc, _createdAt asc) {
        _id, name, role, location, avatarColor, quote, order
      }`,
      {},
      fetchOptions
    )
    return results ?? []
  } catch {
    return []
  }
}

// ── PA-013: Planes de precios desde Sanity CMS ────────────────────────────────

export interface SanityPricingPlan {
  _id:        string
  name:       string
  price:      number         // precio en EUR/mes
  yearlyPrice?: number       // precio anual opcional
  description: string
  features:   string[]
  highlighted: boolean       // plan recomendado
  ctaLabel:    string
  order:       number
}

/**
 * Obtiene los planes de precios desde Sanity CMS.
 * Devuelve array vacío si el tipo aún no existe en CMS (fallback estático).
 */
export async function getPricingPlans(): Promise<SanityPricingPlan[]> {
  if (!isSanityConfigured()) return []
  try {
    const results = await client.fetch(
      `*[_type == "pricingPlan"] | order(order asc, price asc) {
        _id, name, price, yearlyPrice, description,
        "features": features[],
        highlighted, ctaLabel, order
      }`,
      {},
      fetchOptions
    )
    return results ?? []
  } catch {
    return []
  }
}
