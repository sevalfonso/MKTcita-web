import type { Metadata } from 'next'
import { LEGAL } from '@/config/legal'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Información legal de MyMarketing conforme al artículo 10 de la LSSI-CE.',
  robots: { index: false },
}

export default function AvisoLegalPage() {
  const year = new Date().getFullYear()
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-heading font-extrabold text-3xl text-dark mb-2">Aviso Legal</h1>
        <p className="text-sm text-neutral-500 mb-10">
          Conforme al artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE).
        </p>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">1. Datos identificativos</h2>
          <div className="bg-neutral-50 rounded-2xl p-6 space-y-2 text-sm text-neutral-700">
            <p><strong>Denominación social:</strong> {LEGAL.NOMBRE_LEGAL}</p>
            <p><strong>CIF:</strong> {LEGAL.CIF}</p>
            <p><strong>Domicilio social:</strong> {LEGAL.DOMICILIO}, {LEGAL.CP} {LEGAL.MUNICIPIO} ({LEGAL.PROVINCIA})</p>
            <p><strong>Inscripción registral:</strong> {LEGAL.REGISTRO_MERCANTIL}</p>
            <p><strong>Correo electrónico:</strong> <a href={`mailto:${LEGAL.EMAIL_LEGAL}`} className="text-brand-blue hover:underline">{LEGAL.EMAIL_LEGAL}</a></p>
            <p><strong>Sitio web:</strong> mymarketing.es</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">2. Objeto y condiciones de uso</h2>
          <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
            <p>
              El presente sitio web, mymarketing.es, es titularidad de {LEGAL.NOMBRE_LEGAL}. A través de este sitio web, {LEGAL.NOMBRE_LEGAL} presta servicios de información sobre su plataforma SaaS de marketing autónomo y gestión de citas para profesionales de servicios locales («MyMarketing»).
            </p>
            <p>
              El acceso y uso del sitio web atribuyen la condición de usuario e implican la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios, sin destinarlos a actividades ilícitas, prohibidas o lesivas de derechos e intereses de terceros.
            </p>
            <p>
              {LEGAL.NOMBRE_LEGAL} se reserva el derecho de modificar unilateralmente, en cualquier momento y sin previo aviso, la presentación, configuración y contenidos del sitio web, así como las condiciones de acceso y uso del mismo.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">3. Propiedad intelectual e industrial</h2>
          <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
            <p>
              Todos los contenidos del sitio web mymarketing.es, incluyendo textos, imágenes, logotipos, diseños, código fuente y demás elementos, son propiedad de {LEGAL.NOMBRE_LEGAL} o de sus licenciantes, y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.
            </p>
            <p>
              El nombre comercial «MyMarketing», el logotipo y demás signos distintivos son marcas cuyo uso no podrá reproducirse, distribuirse ni transmitirse sin autorización escrita previa de {LEGAL.NOMBRE_LEGAL}.
            </p>
            <p>
              <strong>Contenido generado por inteligencia artificial.</strong> Parte de los contenidos publicados en este sitio web y en los perfiles de Google de los usuarios de MyMarketing puede haber sido generado total o parcialmente mediante herramientas de inteligencia artificial. Todo contenido generado por IA es revisado y aprobado explícitamente por el correspondiente profesional (tenant) antes de su publicación. {LEGAL.NOMBRE_LEGAL} actúa como prestador técnico del servicio de generación de contenido; la responsabilidad editorial del contenido publicado recae sobre el usuario que lo haya aprobado, conforme a lo establecido en los Términos y Condiciones del servicio. {LEGAL.NOMBRE_LEGAL} no garantiza la exactitud, completitud ni vigencia del contenido generado por IA y no es responsable de los daños que pudieran derivarse de su uso o difusión cuando dicho contenido haya sido aprobado y publicado por el tenant.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">4. Exclusión de responsabilidad</h2>
          <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
            <p>
              {LEGAL.NOMBRE_LEGAL} no se hace responsable de los daños o perjuicios de cualquier naturaleza que pudieran derivarse del acceso, uso o imposibilidad de uso del sitio web, ni de los errores u omisiones en el contenido del mismo.
            </p>
            <p>
              {LEGAL.NOMBRE_LEGAL} tampoco responde de los daños derivados del uso de contenidos generados por inteligencia artificial que hayan sido aprobados y publicados por el tenant. El tenant, en su calidad de responsable del tratamiento respecto a sus propios clientes y de aprobador explícito del contenido IA, asume la responsabilidad editorial y legal de dicho contenido.
            </p>
            <p>
              El sitio web puede contener enlaces a sitios web de terceros. {LEGAL.NOMBRE_LEGAL} no asume responsabilidad alguna respecto de dichos sitios, sus contenidos ni las cookies o políticas de privacidad que apliquen.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-dark mb-4">5. Jurisdicción y ley aplicable</h2>
          <p className="text-sm text-neutral-700 leading-relaxed">
            La relación entre {LEGAL.NOMBRE_LEGAL} y el usuario se regirá por la legislación española vigente. Para la resolución de cualquier controversia derivada del uso de este sitio web, las partes se someten, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, a los Juzgados y Tribunales de Madrid (España).
          </p>
        </section>

        <p className="text-xs text-neutral-400 mt-10">Última actualización: {year}</p>
      </div>
    </div>
  )
}
