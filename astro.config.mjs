// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://abelvelascoglz.github.io',
  base: '/codigo-guerrero/',
  integrations: [tailwind()],
  build: {
    assets: 'assets'
  }
});

