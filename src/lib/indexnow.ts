/**
 * F4.3 — IndexNow para indexación rápida en Bing/Yandex.
 * Silencia errores — no es crítico para el flujo principal.
 */
export async function notifyIndexNow(urls: string[]): Promise<void> {
  const key  = process.env.INDEXNOW_KEY
  const host = 'mymarketing.es'
  if (!key || urls.length === 0) return

  await fetch('https://api.indexnow.org/IndexNow', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ host, key, urlList: urls }),
  }).catch(() => {})
}
