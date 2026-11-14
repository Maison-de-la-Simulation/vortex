import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'static',
  site: process.env.ASTRO_SITE_URL,
  base: process.env.ASTRO_BASE_PATH || '/',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
})
