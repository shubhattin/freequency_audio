import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    sveltekit(),
    purgeCss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'SvaraDarshini',
        short_name: 'SvaraDarshini',
        start_url: '/',
        scope: './',
        icons: [
          {
            src: 'img/icon_128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'img/icon_512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        theme_color: '#181e20',
        background_color: '#333',
        display: 'standalone'
      }
    })
  ],
  worker: {
    format: 'es'
  }
});
