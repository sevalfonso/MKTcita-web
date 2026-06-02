import Link from 'next/link'

interface RelatedPost {
  slug: string
  title: string
  sector: string
  sectorEmoji: string
  readingTime?: number
}

interface RelatedPostsProps {
  posts: RelatedPost[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null

  return (
    <section
      aria-label="Artículos relacionados"
      className="mt-12 pt-10 border-t border-neutral-100"
    >
      <h2 className="font-heading font-bold text-xl sm:text-2xl text-dark mb-6">
        Artículos relacionados
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-5 rounded-2xl border border-neutral-100 hover:border-brand-blue hover:shadow-sm transition-all group"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-50 text-neutral-700 mb-3">
              <span aria-hidden="true">{post.sectorEmoji}</span>
              {post.sector}
            </span>
            <h3 className="font-semibold text-dark leading-snug text-sm group-hover:text-brand-blue transition-colors mb-2">
              {post.title}
            </h3>
            {post.readingTime && (
              <p className="text-xs text-neutral-500">{post.readingTime} min de lectura</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  )
}
