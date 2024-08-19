import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Emoji_Page-React/page/',
  plugins: [react()],
  build: {
    sourcemap: false
  }
})