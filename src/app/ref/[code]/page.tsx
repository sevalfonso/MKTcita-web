import { redirect } from 'next/navigation'
import { cookies }  from 'next/headers'

interface Props { params: { code: string } }

/**
 * F4.2 / PA-014 — Landing de referido.
 * 1. Registra la visita en MKTcita (server-side → no bloqueado por adblockers)
 * 2. Guarda el código en cookie (30 días) para persistir en el onboarding
 * 3. Redirige al onboarding con ?ref=[code]
 */
export default async function RefPage({ params }: Props) {
  const { code } = params

  // 1. Registrar visita en MKTcita (best-effort, no bloquea si falla)
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.mymarketing.es'
  try {
    await fetch(`${appUrl}/api/referrals/track`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ referral_code: code, event: 'visit' }),
      // Timeout de 2s para no bloquear la redirección
      signal: AbortSignal.timeout(2000),
    })
  } catch {
    // Silenciar: la redirección no debe depender del tracking
  }

  // 2. Guardar cookie en el dominio raíz
  const cookieStore = await cookies()
  cookieStore.set('referral_code', code, {
    httpOnly: true,
    path:     '/',
    maxAge:   30 * 24 * 60 * 60,  // 30 días
    sameSite: 'lax',
    secure:   process.env.NODE_ENV === 'production',
    // Dominio raíz para que la cookie llegue a app.mymarketing.es
    domain:   process.env.NODE_ENV === 'production' ? '.mymarketing.es' : undefined,
  })

  // 3. Redirigir al onboarding con el código en la URL (fallback si la cookie no llega)
  redirect(`${appUrl}/onboarding?ref=${encodeURIComponent(code)}`)
}
