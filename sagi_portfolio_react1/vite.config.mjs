import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

server: {
  https: true
}

export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist' }
})
