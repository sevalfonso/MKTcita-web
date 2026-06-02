interface TOCItem {
  id: string
  text: string
}

interface TableOfContentsProps {
  headings: TOCItem[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  if (headings.length < 2) return null

  return (
    <nav
      aria-label="Tabla de contenidos"
      className="bg-neutral-50 border border-neutral-100 rounded-2xl p-5 sm:p-6 mb-8"
    >
      <p className="font-semibold text-sm text-dark mb-3">En este artículo</p>
      <ol className="space-y-1.5 list-decimal list-inside">
        {headings.map((h) => (
          <li key={h.id}>
            <a href={`#${h.id}`} className="text-sm text-brand-blue hover:underline">
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
