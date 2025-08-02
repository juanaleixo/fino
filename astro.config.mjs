import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yourusername.github.io',
  integrations: [
    // Descomente a linha abaixo para habilitar Tailwind CSS
    // tailwind(),
  ],
  vite: {
    test: {
      globals: true,
    },
  },
}); 