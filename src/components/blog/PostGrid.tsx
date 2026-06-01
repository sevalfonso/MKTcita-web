'use client'

import { useState } from 'react'
import { PostCard } from './PostCard'
import type { Post } from '@/lib/sanity'
import { SECTORS } from '@/config/sectors'

interface PostGridProps {
  posts: Post[]
}

export function PostGrid({ posts }: PostGridProps) {
  const [activeSector, setActiveSector] = useState<string | null>(null)

  // Solo mostrar sectores que tienen artículos
  const usedSectorIds = Array.from(new Set(posts.map((p) => p.sector)))
  const usedSectors = SECTORS.filter((s) => usedSectorIds.includes(s.id))

  const filtered = activeSector ? posts.filter((p) => p.sector === activeSector) : posts

  return (
    <div>
      {/* Filtro por sector */}
      <div className="overflow-x-auto -mx-4 px-4 mb-8">
        <div className="flex gap-2 min-w-max">
          <button
            onClick={() => setActiveSector(null)}
            className={`h-10 px-4 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeSector === null
                ? 'bg-brand-blue text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            Todos
          </button>
          {usedSectors.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActiveSector(activeSector === id ? null : id)}
              className={`h-10 px-4 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-1.5 transition-colors ${
                activeSector === id
                  ? 'bg-brand-blue text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              <span aria-hidden="true">{icon}</span>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-neutral-500 py-16">No hay artículos en este sector todavía.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
