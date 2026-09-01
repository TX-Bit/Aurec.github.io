import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        fi: resolve(__dirname, 'fi/index.html'),
        fr: resolve(__dirname, 'fr/index.html'),
        sv: resolve(__dirname, 'sv/index.html'),
        es: resolve(__dirname, 'es/index.html'),
        de: resolve(__dirname, 'de/index.html'),
        zh: resolve(__dirname, 'zh/index.html'),
      },
    },
  },
})
