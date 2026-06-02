export function AuthorBio() {
  return (
    <aside
      aria-label="Sobre el autor"
      className="mt-8 p-5 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-start gap-4"
    >
      <div
        className="w-12 h-12 rounded-full bg-brand-blue flex-shrink-0 flex items-center justify-center text-white font-bold text-lg"
        aria-hidden="true"
      >
        M
      </div>
      <div>
        <p className="font-semibold text-dark text-sm mb-1">Equipo MyMarketing</p>
        <p className="text-xs text-neutral-500 leading-relaxed">
          El equipo de MyMarketing ayuda a profesionales de servicios locales en España a ser más visibles en Google y en las IAs. Escribimos sobre marketing práctico, posicionamiento y gestión de negocios para profesionales que viven de su tiempo.
        </p>
        <a
          href="https://mymarketing.es"
          className="text-xs text-brand-blue hover:underline mt-1 inline-block"
        >
          mymarketing.es →
        </a>
      </div>
    </aside>
  )
}
