import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    {
      name: 'handle-html5-routing',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.includes('.')) return next()
          req.url = '/index.html'
          next()
        })
      }
    }
  ],
  server: {
    port: 5173,
  },
  preview: {
    port: 5173,
  },
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: undefined,
      },
    },
  },
})
