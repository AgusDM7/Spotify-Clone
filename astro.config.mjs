// @ts-check
import { defineConfig } from 'astro/config';

// Integraciones
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel'; // 👈 versión recomendada sin /serverless

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      postcss: './postcss.config.cjs',
    },
  },

  integrations: [react(), svelte()],

  adapter: vercel({}), 

  output: 'server', 
});
