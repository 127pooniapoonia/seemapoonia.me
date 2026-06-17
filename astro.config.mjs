import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://seemapoonia.me',
  output: 'server',
  security: { checkOrigin: false },
  adapter: vercel(),
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
