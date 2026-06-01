/**
 * Convierte las 3 propuestas SVG a PNG (1200×630) listos para OG.
 * Uso: npx tsx scripts/generate-og-images.ts
 */
import sharp from 'sharp'
import { readFileSync, existsSync, mkdirSync } from 'fs'
import { resolve } from 'path'

const ROOT = resolve(process.cwd())

const IMAGES = [
  {
    src:  `${ROOT}/public/og-proposals/propuesta-a.svg`,
    dest: `${ROOT}/public/og-default.png`,
    label: 'A → og-default.png (home + legales)',
  },
  {
    src:  `${ROOT}/public/og-proposals/propuesta-b.svg`,
    dest: `${ROOT}/public/og-blog.png`,
    label: 'B → og-blog.png (blog + artículos)',
  },
  {
    src:  `${ROOT}/public/og-proposals/propuesta-c.svg`,
    dest: `${ROOT}/public/og-landing.png`,
    label: 'C → og-landing.png (por-que-mymarketing + conversión)',
  },
]

async function main() {
  console.log('🖼  Generando imágenes OG...\n')

  for (const { src, dest, label } of IMAGES) {
    if (!existsSync(src)) {
      console.error(`  ❌ No encontrado: ${src}`)
      continue
    }
    const svgBuffer = readFileSync(src)
    await sharp(svgBuffer)
      .resize(1200, 630)
      .png({ quality: 90 })
      .toFile(dest)
    console.log(`  ✅ ${label}`)
  }

  console.log('\n✅ Listo. Archivos en /public/')
}

main().catch((e) => console.error('Error:', e.message))
