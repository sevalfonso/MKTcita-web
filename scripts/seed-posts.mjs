import { createClient } from '@sanity/client'
import { SEED_POSTS } from '../sanity/seed/posts.js'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token:     process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const transaction = client.transaction()
for (const post of SEED_POSTS) {
  transaction.create(post)
}

transaction.commit()
  .then(() => console.log(`✅ ${SEED_POSTS.length} artículos importados`))
  .catch(err => console.error('❌ Error:', err.message))