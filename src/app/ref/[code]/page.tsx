import { redirect } from 'next/navigation'
import { cookies }  from 'next/headers'

interface Props { params: { code: string } }

/**
 * F4.2 — Landing de referido.
 * Guarda el código en una cookie y redirige al onboarding con ?ref=[code]
 * para que MKTcita registre la relación referidor → referido.
 */
export default async function RefPage({ params }: Props) {
  const { code } = params

  // Guardar cookie en el dominio raíz para que app.mymarketing.es la lea
  const cookieStore = await cookies()
  cookieStore.set('referral_code', code, {
    httpOnly: true,
    path:     '/',
    maxAge:   30 * 24 * 60 * 60,  // 30 días
    sameSite: 'lax',
    secure:   process.env.NODE_ENV === 'production',
    // domain:  '.mymarketing.es',  // descomentar en producción si los subdominios lo necesitan
  })

  redirect(`https://app.mymarketing.es/onboarding?ref=${encodeURIComponent(code)}`)
}
