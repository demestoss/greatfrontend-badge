import { defineConfig } from 'vite'
import { vitePlugin as remix } from "@remix-run/dev";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [remix({
    basename: '/greatfrontend-design-system/'
  }), tailwindcss()],
  base: '/greatfrontend-design-system/'
})
