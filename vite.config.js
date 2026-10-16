import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// user site (pobphon11.github.io) is served from the domain root
export default defineConfig({
  plugins: [react()],
  base: '/',
})
