import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { post } from './schema/post'
import { siteSettings } from './schema/siteSettings'
import { blockContent } from './schema/blockContent'

export default defineConfig({
  name: 'mymarketing-web',
  title: 'MyMarketing — CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: {
    types: [post, siteSettings, blockContent],
  },
})
