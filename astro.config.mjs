import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.seemapoonia.me',
  output: 'server',
  security: { checkOrigin: false },
  adapter: vercel(),
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
