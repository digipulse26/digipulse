import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// VITE_BASE diisi saat deploy ke GitHub Pages (mis. /digipulse/). Lokal tetap "/".
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
