import type { Metadata } from 'next'
import { LEGAL } from '@/config/legal'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de MyMarketing conforme al RGPD y la LOPDGDD.',
  robots: { index: false },
}

export default function PrivacidadPage() {
  const year = new Date().getFullYear()
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-heading font-extrabold text-3xl text-dark mb-2">Política de Privacidad</h1>
        <p className="text-sm text-neutral-500 mb-10">
          Conforme al Reglamento (UE) 2016/679 (RGPD), artículo 13, y la Ley Orgánica 3/2018 (LOPDGDD).
        </p>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">1. Responsable del tratamiento</h2>
          <div className="bg-neutral-50 rounded-2xl p-6 space-y-2 text-sm text-neutral-700">
            <p><strong>Identidad:</strong> {LEGAL.NOMBRE_LEGAL}</p>
            <p><strong>CIF:</strong> {LEGAL.CIF}</p>
            <p><strong>Dirección:</strong> {LEGAL.DOMICILIO}, {LEGAL.CP} {LEGAL.MUNICIPIO} ({LEGAL.PROVINCIA})</p>
            <p><strong>Email de privacidad:</strong> <a href={`mailto:${LEGAL.EMAIL_PRIVACIDAD}`} className="text-brand-blue hover:underline">{LEGAL.EMAIL_PRIVACIDAD}</a></p>
            <p><strong>Delegado de Protección de Datos (DPD):</strong> <a href={`mailto:${LEGAL.EMAIL_DPD}`} className="text-brand-blue hover:underline">{LEGAL.EMAIL_DPD}</a></p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">2. Finalidades y bases jurídicas</h2>
          <div className="space-y-5 text-sm text-neutral-700">
            <div className="border-l-4 border-brand-blue pl-4">
              <h3 className="font-semibold text-dark mb-1">a) Gestión de tenants (clientes de MyMarketing)</h3>
              <p><strong>Datos:</strong> nombre, email, teléfono, datos de facturación, datos del negocio.</p>
              <p><strong>Finalidad:</strong> Alta, mantenimiento y gestión de la cuenta en la plataforma.</p>
              <p><strong>Base jurídica:</strong> Ejecución del contrato (art. 6.1.b RGPD).</p>
              <p><strong>Retención:</strong> Mientras dure la relación contractual y durante 6 años adicionales por obligaciones fiscales.</p>
            </div>
            <div className="border-l-4 border-brand-green pl-4">
              <h3 className="font-semibold text-dark mb-1">b) Datos de clientes finales del tenant</h3>
              <p><strong>Datos:</strong> nombre, teléfono, email, historial de citas.</p>
              <p><strong>Finalidad:</strong> Gestión de agenda y envío de recordatorios en nombre del tenant.</p>
              <p><strong>Base jurídica:</strong> Interés legítimo del tenant o consentimiento del cliente final, según lo que haya recabado el tenant. {LEGAL.NOMBRE_LEGAL} actúa como encargado del tratamiento respecto a estos datos.</p>
              <p><strong>Retención:</strong> Según instrucción del tenant. Máximo 30 días tras cancelación de cuenta.</p>
            </div>
            <div className="border-l-4 border-brand-yellow pl-4">
              <h3 className="font-semibold text-dark mb-1">c) Datos de Google Business Profile (GBP)</h3>
              <p><strong>Datos:</strong> reseñas públicas, información de ubicación, métricas de perfil.</p>
              <p><strong>Finalidad:</strong> Análisis de reputación online y generación de contenido para el perfil de Google del tenant.</p>
              <p><strong>Base jurídica:</strong> Ejecución del contrato y consentimiento explícito del tenant al conectar su cuenta de Google.</p>
              <p className="font-medium text-dark">Los datos procedentes de GBP no se utilizan para entrenar modelos de IA propios.</p>
              <p><strong>Retención:</strong> Durante la relación contractual. Los tokens de acceso OAuth se revocan y eliminan al cancelar la cuenta.</p>
            </div>
            <div className="border-l-4 border-brand-red pl-4">
              <h3 className="font-semibold text-dark mb-1">d) Generación de contenido con IA</h3>
              <p><strong>Datos:</strong> información del negocio del tenant, métricas de GBP, historial de citas (anonimizado).</p>
              <p><strong>Finalidad:</strong> Generación de contenido optimizado para posicionamiento en buscadores e IAs, sujeto a aprobación humana previa a la publicación.</p>
              <p><strong>Base jurídica:</strong> Ejecución del contrato.</p>
              <p className="font-medium text-dark">Ningún contenido generado por IA se publica sin aprobación explícita del tenant (art. 14 del EU AI Act).</p>
            </div>
            <div className="border-l-4 border-neutral-200 pl-4">
              <h3 className="font-semibold text-dark mb-1">e) Comunicaciones comerciales</h3>
              <p><strong>Datos:</strong> email, nombre.</p>
              <p><strong>Finalidad:</strong> Envío de novedades, actualizaciones del servicio y comunicaciones comerciales.</p>
              <p><strong>Base jurídica:</strong> Consentimiento (art. 6.1.a RGPD). Puede retirarse en cualquier momento.</p>
              <p><strong>Retención:</strong> Hasta la retirada del consentimiento.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">3. Proveedores encargados del tratamiento</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-neutral-700 border-collapse">
              <thead>
                <tr className="bg-neutral-50 text-left">
                  <th className="p-3 font-semibold text-dark border border-neutral-100">Proveedor</th>
                  <th className="p-3 font-semibold text-dark border border-neutral-100">Finalidad</th>
                  <th className="p-3 font-semibold text-dark border border-neutral-100">Localización</th>
                  <th className="p-3 font-semibold text-dark border border-neutral-100">Garantías</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Supabase (EU)', 'Base de datos y autenticación', 'UE (Frankfurt)', 'DPA firmado, ISO 27001'],
                  ['Vercel', 'Infraestructura y CDN', 'UE', 'DPA firmado, SCCs'],
                  ['Resend', 'Envío de emails transaccionales', 'UE', 'DPA firmado'],
                  ['Google (GBP OAuth)', 'Integración con Google Business Profile', 'EE.UU. (SCCs)', 'SCCs, Google DPA'],
                ].map(([proveedor, finalidad, localizacion, garantias]) => (
                  <tr key={proveedor} className="border-b border-neutral-100">
                    <td className="p-3 border border-neutral-100 font-medium">{proveedor}</td>
                    <td className="p-3 border border-neutral-100">{finalidad}</td>
                    <td className="p-3 border border-neutral-100">{localizacion}</td>
                    <td className="p-3 border border-neutral-100">{garantias}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">4. Derechos del interesado (ARSUPO)</h2>
          <div className="space-y-2 text-sm text-neutral-700 leading-relaxed">
            <p>Puede ejercer los siguientes derechos dirigiéndose a <a href={`mailto:${LEGAL.EMAIL_PRIVACIDAD}`} className="text-brand-blue hover:underline">{LEGAL.EMAIL_PRIVACIDAD}</a>:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Acceso:</strong> conocer qué datos personales tratamos.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
              <li><strong>Oposición:</strong> oponerse al tratamiento en determinadas circunstancias.</li>
              <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado y legible por máquina.</li>
              <li><strong>Limitación:</strong> solicitar la restricción del tratamiento en determinados supuestos.</li>
            </ul>
            <p className="mt-3">
              Si considera que el tratamiento de sus datos vulnera la normativa aplicable, puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">www.aepd.es</a>.
            </p>
          </div>
        </section>

        <p className="text-xs text-neutral-400 mt-10">Última actualización: {year}</p>
      </div>
    </div>
  )
}
