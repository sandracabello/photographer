// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    // site: 'https://sandracabello.github.io/',
    output:'server',
    adapter: netlify(),
    base: (process.env.PUBLIC_BASE_URL || './').replace(/\/+$/, ''),
});
