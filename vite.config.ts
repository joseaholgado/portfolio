import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// base './' hace que la web funcione en cualquier ruta (p. ej. GitHub Pages /portfolio/).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
