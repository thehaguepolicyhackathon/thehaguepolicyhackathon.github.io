// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
   site: 'https://thehaguepolicyhackathon.github.io',
   prefetch: true,
   integrations: [react()],
   
   experimental: {
     clientPrerender: true,
     fonts: [{
       provider: fontProviders.google(),
       name: "Geist",
       cssVariable: "--font-geist",
       fallbacks: ["Inter", "sans-serif"],
      }]
    },
    
    vite: {
      plugins: [tailwindcss()]
    },
  // adapter: vercel()
});
