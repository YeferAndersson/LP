import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['gsap', 'motion']
    }
  },
  // Build configuration
  build: {
    // Inline stylesheets smaller than this limit
    inlineStylesheets: 'auto',
  },
  // Development server configuration
  server: {
    port: 3000,
    host: true
  }
});