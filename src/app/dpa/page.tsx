import type { Metadata } from 'next'
import { LEGAL } from '@/config/legal'

export const metadata: Metadata = {
  title: 'Acuerdo de Encargado de Tratamiento (DPA)',
  description: 'Acuerdo de Encargado de Tratamiento entre MyMarketing y sus clientes, conforme al artículo 28 del RGPD.',
  robots: { index: false },
}

export default function DPAPage() {
  const year = new Date().getFullYear()
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-heading font-extrabold text-3xl text-dark mb-2">
          Acuerdo de Encargado de Tratamiento (DPA)
        </h1>
        <p className="text-sm text-neutral-500 mb-10">
          Conforme al artículo 28 del Reglamento (UE) 2016/679 (RGPD).
        </p>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">1. Partes</h2>
          <div className="bg-neutral-50 rounded-2xl p-6 space-y-3 text-sm text-neutral-700">
            <div>
              <p className="font-semibold text-dark">Encargado del tratamiento:</p>
              <p>{LEGAL.NOMBRE_LEGAL}</p>
              <p>CIF: {LEGAL.CIF}</p>
              <p>{LEGAL.DOMICILIO}, {LEGAL.CP} {LEGAL.MUNICIPIO} ({LEGAL.PROVINCIA})</p>
            </div>
            <div>
              <p className="font-semibold text-dark">Responsable del tratamiento:</p>
              <p>El tenant (profesional o empresa) que contrata los servicios de MyMarketing, identificado en el proceso de registro.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">2. Objeto y alcance</h2>
          <p className="text-sm text-neutral-700 leading-relaxed">
            {LEGAL.NOMBRE_LEGAL} (encargado) tratará datos personales de los clientes finales del tenant (responsable) exclusivamente para la prestación de los servicios contratados: gestión de agenda y citas, envío de recordatorios, análisis de reputación y generación de contenido de marketing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">3. Instrucciones del responsable</h2>
          <p className="text-sm text-neutral-700 leading-relaxed">
            El encargado tratará los datos únicamente siguiendo las instrucciones documentadas del responsable, plasmadas en la configuración de la plataforma y en el presente acuerdo. Si el encargado considera que una instrucción infringe el RGPD, informará al responsable sin demora.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">4. Subencargados del tratamiento</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-neutral-700 border-collapse">
              <thead>
                <tr className="bg-neutral-50 text-left">
                  <th className="p-3 font-semibold text-dark border border-neutral-100">Subencargado</th>
                  <th className="p-3 font-semibold text-dark border border-neutral-100">Actividad</th>
                  <th className="p-3 font-semibold text-dark border border-neutral-100">Localización</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Supabase', 'Base de datos PostgreSQL, autenticación y almacenamiento', 'UE (Frankfurt)'],
                  ['Vercel', 'Infraestructura de computación y CDN', 'UE'],
                  ['Resend', 'Envío de emails transaccionales (recordatorios de citas)', 'UE'],
                  ['Google (Gmail / GBP API)', 'Integración OAuth con Google Business Profile', 'EE.UU. (SCCs aplicables)'],
                ].map(([sub, actividad, loc]) => (
                  <tr key={sub} className="border-b border-neutral-100">
                    <td className="p-3 border border-neutral-100 font-medium">{sub}</td>
                    <td className="p-3 border border-neutral-100">{actividad}</td>
                    <td className="p-3 border border-neutral-100">{loc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-neutral-700 mt-3">
            El encargado notificará al responsable con al menos 30 días de antelación cualquier cambio en los subencargados.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">5. Medidas de seguridad</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700">
            <li><strong>Aislamiento de datos (RLS):</strong> cada tenant accede exclusivamente a sus propios datos mediante Row Level Security en la base de datos.</li>
            <li><strong>Cifrado en tránsito:</strong> todas las comunicaciones se realizan sobre HTTPS/TLS 1.3.</li>
            <li><strong>Cifrado en reposo:</strong> los datos se almacenan cifrados en los servidores de Supabase.</li>
            <li><strong>Soft delete:</strong> los datos eliminados por el usuario se marcan como inactivos y se eliminan físicamente tras 30 días.</li>
            <li><strong>Acceso mínimo:</strong> el personal de {LEGAL.NOMBRE_LEGAL} accede a los datos de producción únicamente cuando es estrictamente necesario y bajo registro de auditoría.</li>
            <li><strong>Notificación de brechas:</strong> {LEGAL.NOMBRE_LEGAL} notificará al responsable cualquier violación de seguridad en un plazo máximo de 72 horas desde su detección.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">6. Derechos de los interesados</h2>
          <p className="text-sm text-neutral-700 leading-relaxed">
            El encargado asistirá al responsable en la atención de las solicitudes de ejercicio de derechos (acceso, rectificación, supresión, oposición, portabilidad y limitación) de los clientes finales del tenant. El responsable es el punto de contacto para los interesados.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">7. Duración y devolución o supresión de datos</h2>
          <p className="text-sm text-neutral-700 leading-relaxed">
            Este acuerdo estará vigente mientras dure la relación contractual entre las partes. Tras la resolución del contrato, el encargado conservará los datos durante 30 días para permitir la reactivación, transcurridos los cuales procederá a su eliminación definitiva e irrecuperable, salvo que la ley exija su conservación.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">8. Firma del acuerdo</h2>
          <div className="bg-neutral-50 rounded-2xl p-6 text-center">
            <p className="text-sm text-neutral-700 mb-4">
              Este acuerdo se perfecciona electrónicamente al aceptar los Términos y Condiciones durante el proceso de registro en MyMarketing, conforme al artículo 3.10 del RGPD y la Ley 59/2003 de firma electrónica.
            </p>
            <div className="inline-block border-2 border-dashed border-neutral-200 rounded-2xl px-8 py-6 text-neutral-400 text-sm">
              [Zona reservada para firma electrónica del tenant]
            </div>
          </div>
        </section>

        <p className="text-xs text-neutral-400 mt-10">Última actualización: {year}</p>
      </div>
    </div>
  )
}
