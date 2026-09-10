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
        ja: resolve(__dirname, 'ja/index.html'),
        hi: resolve(__dirname, 'hi/index.html'),
        pt: resolve(__dirname, 'pt/index.html'),
        'voice-recorder-iphone': resolve(__dirname, 'voice-recorder-iphone/index.html'),
        'multitrack-recorder-iphone': resolve(__dirname, 'multitrack-recorder-iphone/index.html'),
        'overdub-app-iphone': resolve(__dirname, 'overdub-app-iphone/index.html'),
        'record-guitar-and-vocals-iphone': resolve(__dirname, 'record-guitar-and-vocals-iphone/index.html'),
        'usb-audio-interface-ipad': resolve(__dirname, 'usb-audio-interface-ipad/index.html'),
        'audio-editor-iphone': resolve(__dirname, 'audio-editor-iphone/index.html'),
        'audacity-alternative-ios': resolve(__dirname, 'audacity-alternative-ios/index.html'),
      },
    },
  },
})
