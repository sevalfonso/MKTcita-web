/**
 * Envía todas las URLs de mymarketing.es a Bing/IndexNow para indexación inmediata.
 * node scripts/submit-indexnow.mjs
 *
 * Requiere: INDEXNOW_KEY en .env.local (o en el env)
 */

import { readFileSync } from 'fs'
import { resolve } from 'path'

// Leer .env.local
const env = {}
try {
  readFileSync(resolve(process.cwd(), '.env.local'), 'utf8')
    .split('\n')
    .forEach(l => {
      const [k, ...v] = l.split('=')
      if (k) env[k.trim()] = v.join('=').trim()
    })
} catch {}

const KEY = env.INDEXNOW_KEY || process.env.INDEXNOW_KEY
if (!KEY) {
  console.error('❌ INDEXNOW_KEY no encontrada en .env.local')
  process.exit(1)
}

const HOST = 'mymarketing.es'
const BASE = `https://${HOST}`

const SECTORES = [
  'peluqueria','barberia','estetica','manicura','micropigmentacion','depilacion','tatuajes',
  'fisioterapia','osteopatia','psicologia','nutricion','podologia','logopedia','acupuntura',
  'entrenador','dentista','ortodoncista','medicina-estetica','dermatologo','oftalmologo',
  'veterinario','peluqueria-canina','adiestramiento','academia','clases','musica',
  'coaching','psicopedagogia','fotografia','video',
]

const CIUDADES = [
  'madrid','barcelona','valencia','sevilla','bilbao','zaragoza',
  'malaga','murcia','palma','las-palmas','alicante','cordoba',
]

const URLS = [
  // Estáticas
  `${BASE}/`,
  `${BASE}/por-que-mymarketing`,
  `${BASE}/precios`,
  `${BASE}/blog`,
  `${BASE}/sobre-nosotros`,
  `${BASE}/testimonios`,
  `${BASE}/llms.txt`,
  // Sectores hub
  ...SECTORES.map(s => `${BASE}/para/${s}`),
  // Sectores × ciudades
  ...SECTORES.flatMap(s => CIUDADES.map(c => `${BASE}/sectores/${s}/${c}`)),
  // Artículos nuevos
  `${BASE}/blog/mymarketing-vs-agendapro-2026`,
  `${BASE}/blog/mejores-software-peluqueria-ia-espana-2026`,
  `${BASE}/blog/aparecer-chatgpt-gemini-claude-negocio-local-2026`,
]

// IndexNow acepta max 10.000 URLs por petición
const BATCH = 500

async function submit(urls) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `${BASE}/${KEY}.txt`,
    urlList: urls,
  }

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })

  return { status: res.status, text: await res.text().catch(() => '') }
}

async function main() {
  console.log(`Total URLs: ${URLS.length}`)
  for (let i = 0; i < URLS.length; i += BATCH) {
    const batch = URLS.slice(i, i + BATCH)
    const { status, text } = await submit(batch)
    console.log(`  Batch ${Math.floor(i / BATCH) + 1}: ${batch.length} URLs → HTTP ${status} ${text || 'OK'}`)
  }
  console.log('IndexNow enviado.')
}

main().catch(console.error)
