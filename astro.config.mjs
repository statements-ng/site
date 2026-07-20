// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://statements.ng',
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['stmtng.orb.local'],
    },
  },
  integrations: [sitemap()],
});
