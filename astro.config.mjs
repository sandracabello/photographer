// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://sandracabello.github.io/',
    output:'static',
    base: process.env.PUBLIC_BASE_URL || './',
});
