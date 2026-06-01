import type { Metadata } from 'next'
import { LEGAL } from '@/config/legal'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso del servicio MyMarketing.',
  robots: { index: false },
}

export default function TerminosPage() {
  const year = new Date().getFullYear()
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-heading font-extrabold text-3xl text-dark mb-2">Términos y Condiciones</h1>
        <p className="text-sm text-neutral-500 mb-10">
          Conforme a la LSSI-CE y la Directiva 2011/83/UE sobre los derechos de los consumidores.
        </p>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">1. Partes del contrato</h2>
          <p className="text-sm text-neutral-700 leading-relaxed">
            Estos Términos y Condiciones regulan la relación contractual entre {LEGAL.NOMBRE_LEGAL} («MyMarketing» o «el prestador») y el profesional o empresa que accede al servicio («el tenant» o «el usuario»). El acceso al servicio implica la aceptación plena de estos términos.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">2. Planes y precios</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-neutral-700 border-collapse">
              <thead>
                <tr className="bg-neutral-50 text-left">
                  <th className="p-3 font-semibold text-dark border border-neutral-100">Plan</th>
                  <th className="p-3 font-semibold text-dark border border-neutral-100">Precio</th>
                  <th className="p-3 font-semibold text-dark border border-neutral-100">Descripción</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Trial', 'Gratuito (15 días)', 'Acceso completo a todas las funcionalidades. Sin tarjeta de crédito requerida.'],
                  ['Esencial', '49 € / mes (IVA no incluido)', 'Gestión de citas, 4 agentes IA, posicionamiento Google e IAs, resumen semanal.'],
                  ['Pro', '79 € / mes (IVA no incluido)', 'Todo lo del plan Esencial más contenido adicional, análisis avanzados y canales extra.'],
                ].map(([plan, precio, desc]) => (
                  <tr key={plan} className="border-b border-neutral-100">
                    <td className="p-3 border border-neutral-100 font-medium">{plan}</td>
                    <td className="p-3 border border-neutral-100">{precio}</td>
                    <td className="p-3 border border-neutral-100">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-neutral-700">
            Los precios podrán ser modificados por MyMarketing con un preaviso mínimo de 30 días a los tenants afectados.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">3. Período de prueba y facturación</h2>
          <div className="space-y-3 text-sm text-neutral-700 leading-relaxed">
            <p>El período de prueba de 15 días es gratuito y no requiere tarjeta de crédito. Al concluir el trial, el tenant deberá elegir un plan de pago para continuar usando el servicio.</p>
            <p>La facturación es mensual y se realiza por período adelantado. No se realizan devoluciones proporcionales por períodos no consumidos salvo en caso de cancelación imputable a MyMarketing.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">4. Responsabilidad del tenant sobre el contenido aprobado</h2>
          <div className="space-y-3 text-sm text-neutral-700 leading-relaxed">
            <p>
              Todo el contenido generado por los agentes de inteligencia artificial de MyMarketing —incluyendo posts para Google Business Profile, artículos de blog y cualquier otro material de marketing— requiere la aprobación explícita del tenant antes de su publicación. Esta aprobación constituye un acto jurídico voluntario y consciente del tenant.
            </p>
            <p>
              El tenant es el único responsable del contenido que apruebe y publique a través de MyMarketing. {LEGAL.NOMBRE_LEGAL} actúa exclusivamente como prestador técnico del servicio de generación de contenido y no asume responsabilidad editorial sobre el contenido aprobado y publicado por el tenant.
            </p>
            <p>
              El tenant garantiza que el contenido que aprueba no vulnera derechos de terceros, no contiene información falsa o engañosa, y cumple con la normativa aplicable a su actividad profesional.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">5. Cumplimiento del EU AI Act</h2>
          <div className="space-y-3 text-sm text-neutral-700 leading-relaxed">
            <p>
              De conformidad con el Reglamento (UE) 2024/1689 sobre inteligencia artificial (EU AI Act), MyMarketing garantiza que ningún contenido generado por sistemas de IA se publica de forma autónoma sin intervención y aprobación humana previa.
            </p>
            <p>
              El tenant, al aprobar el contenido generado por la IA, ejerce la supervisión humana prevista por la normativa europea. MyMarketing pone todos los medios técnicos para que esta supervisión sea efectiva, comprensible y auditable.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">6. Cancelación y baja del servicio</h2>
          <div className="space-y-3 text-sm text-neutral-700 leading-relaxed">
            <p>
              El tenant puede cancelar su suscripción en cualquier momento desde su cuenta, sin permanencia mínima ni penalización. La cancelación surte efecto al final del período mensual en curso.
            </p>
            <p>
              Tras la cancelación, los datos del tenant se conservarán durante 30 días para permitir la reactivación. Transcurrido ese plazo, todos los datos serán eliminados de forma permanente conforme al RGPD.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">7. Modificaciones de las condiciones</h2>
          <p className="text-sm text-neutral-700 leading-relaxed">
            MyMarketing podrá modificar estos Términos y Condiciones con un preaviso de 30 días por email. Si el tenant no acepta las nuevas condiciones, podrá cancelar su cuenta antes de la entrada en vigor de los cambios sin coste adicional.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">8. Jurisdicción y ley aplicable</h2>
          <p className="text-sm text-neutral-700 leading-relaxed">
            Este contrato se rige por el derecho español. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales de Madrid, con renuncia expresa a cualquier otro fuero.
          </p>
        </section>

        <p className="text-xs text-neutral-400 mt-10">Última actualización: {year}</p>
      </div>
    </div>
  )
}
