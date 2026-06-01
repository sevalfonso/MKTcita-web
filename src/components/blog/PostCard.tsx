import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { Post } from '@/lib/sanity'
import { SECTORS } from '@/config/sectors'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const sector = SECTORS.find((s) => s.id === post.sector)
  const dateFormatted = new Date(post.publishedAt).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="flex flex-col rounded-3xl bg-white border border-neutral-100 overflow-hidden hover:shadow-md transition-shadow">
      {post.mainImage?.asset ? (
        <div className="relative h-48 w-full">
          <Image
            src={urlFor(post.mainImage.asset).width(600).height(400).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="h-48 bg-neutral-50 flex items-center justify-center">
          <span className="text-4xl" aria-hidden="true">{sector?.icon || '📝'}</span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-5 sm:p-6 gap-3">
        {sector && (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-neutral-50 text-neutral-700 w-fit">
            <span aria-hidden="true">{sector.icon}</span>
            {sector.label}
          </span>
        )}

        <h3 className="font-heading font-semibold text-base sm:text-lg text-dark leading-snug line-clamp-2">
          <Link href={`/blog/${post.slug?.current ?? post.slug}`} className="hover:text-brand-blue transition-colors">
            {post.title}
          </Link>
        </h3>

        <p className="text-sm text-neutral-700 leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>

        <div className="flex items-center gap-3 text-xs text-neutral-400 pt-2 border-t border-neutral-50">
          <time dateTime={post.publishedAt}>{dateFormatted}</time>
          {post.readingTime && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime} min de lectura</span>
            </>
          )}
        </div>
      </div>
    </article>
  )
}
