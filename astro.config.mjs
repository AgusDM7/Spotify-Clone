// @ts-check
import { defineConfig } from 'astro/config';

// Integraciones
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import netlify from '@astrojs/netlify'; // 👈 Importamos el adapter

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      postcss: './postcss.config.cjs',
    },
  },

  integrations: [react(), svelte()],

  
  adapter: netlify(),

  
  output: 'server',
});
