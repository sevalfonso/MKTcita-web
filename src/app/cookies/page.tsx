import type { Metadata } from 'next'
import { LEGAL } from '@/config/legal'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Información sobre el uso de cookies en mymarketing.es, conforme a la Guía de Cookies de la AEPD.',
  robots: { index: false },
}

export default function CookiesPage() {
  const year = new Date().getFullYear()
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-heading font-extrabold text-3xl text-dark mb-2">Política de Cookies</h1>
        <p className="text-sm text-neutral-500 mb-10">
          Conforme a la Guía sobre el uso de las cookies de la AEPD (2023) y la LSSI-CE.
        </p>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">¿Qué son las cookies?</h2>
          <p className="text-sm text-neutral-700 leading-relaxed">
            Las cookies son pequeños archivos que se almacenan en su navegador cuando visita un sitio web. Permiten al sitio recordar sus preferencias y mejorar su experiencia de navegación.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">Cookies que utilizamos</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-neutral-700 border-collapse">
              <thead>
                <tr className="bg-neutral-50 text-left">
                  <th className="p-3 font-semibold text-dark border border-neutral-100">Nombre</th>
                  <th className="p-3 font-semibold text-dark border border-neutral-100">Categoría</th>
                  <th className="p-3 font-semibold text-dark border border-neutral-100">Finalidad</th>
                  <th className="p-3 font-semibold text-dark border border-neutral-100">Base jurídica</th>
                  <th className="p-3 font-semibold text-dark border border-neutral-100">Plazo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'mm_cookie_consent',
                    category: 'Técnica',
                    purpose: 'Almacena la preferencia de consentimiento de cookies del usuario.',
                    basis: 'Interés legítimo (funcionalidad esencial)',
                    duration: '12 meses',
                  },
                  {
                    name: '__Host-next-auth.*',
                    category: 'Técnica',
                    purpose: 'Gestión de sesión de usuario autenticado.',
                    basis: 'Ejecución del contrato',
                    duration: 'Sesión',
                  },
                  {
                    name: '_ga, _ga_*',
                    category: 'Analítica',
                    purpose: 'Google Analytics: medición de visitas y comportamiento de usuario para mejorar el servicio.',
                    basis: 'Consentimiento',
                    duration: '2 años',
                  },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-neutral-100">
                    <td className="p-3 border border-neutral-100 font-mono text-xs">{row.name}</td>
                    <td className="p-3 border border-neutral-100">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        row.category === 'Técnica'
                          ? 'bg-brand-blue/10 text-brand-blue'
                          : 'bg-brand-yellow/20 text-neutral-700'
                      }`}>
                        {row.category}
                      </span>
                    </td>
                    <td className="p-3 border border-neutral-100">{row.purpose}</td>
                    <td className="p-3 border border-neutral-100">{row.basis}</td>
                    <td className="p-3 border border-neutral-100">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">Cómo gestionar las cookies</h2>
          <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
            <p>
              Puede gestionar sus preferencias de cookies en cualquier momento haciendo clic en «Gestionar cookies» en el pie de esta página, o directamente desde su navegador. Tenga en cuenta que desactivar ciertas cookies puede afectar a la funcionalidad del sitio web.
            </p>
            <p>
              Las cookies técnicas no requieren consentimiento y no pueden desactivarse, ya que son necesarias para el correcto funcionamiento del sitio.
            </p>
            <p>
              Las cookies analíticas solo se cargan si ha otorgado su consentimiento. Si retira el consentimiento, dejarán de instalarse en nuevas visitas.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">Contacto</h2>
          <p className="text-sm text-neutral-700">
            Para cualquier consulta sobre el uso de cookies, puede contactarnos en{' '}
            <a href={`mailto:${LEGAL.EMAIL_PRIVACIDAD}`} className="text-brand-blue hover:underline">
              {LEGAL.EMAIL_PRIVACIDAD}
            </a>.
          </p>
        </section>

        <p className="text-xs text-neutral-400 mt-10">Última actualización: {year}</p>
      </div>
    </div>
  )
}
