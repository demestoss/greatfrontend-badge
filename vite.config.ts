import { vitePlugin as remix } from '@remix-run/dev';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        remix({
            basename: '/greatfrontend-design-system/',
        }),
        tailwindcss(),
    ],
    base: '/greatfrontend-design-system/',
});
