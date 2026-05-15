import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Cody Go',
        short_name: 'CodyGo',
        description: 'Campus navigation for CSUSB',
        theme_color: '#003087',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ],
  optimizeDeps: {
    exclude: ['@arcgis/core']
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  css: {
    preprocessorOptions: {}
  }
})