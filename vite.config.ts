import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import type {} from 'vite-ssg'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: { assetsInlineLimit: 0 },
  ssr: { noExternal: ['vue3-carousel'] },
  ssgOptions: {
    includedRoutes: () => ['/', '/404'],
    dirStyle: 'flat',
    formatting: 'minify',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
