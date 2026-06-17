import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://seemapoonia.me',
  adapter: vercel(),
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
