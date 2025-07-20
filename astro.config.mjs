// @ts-check
import { defineConfig } from 'astro/config';

console.log('BASE PATH:', process.env.PUBLIC_BASE_URL);

// https://astro.build/config
export default defineConfig({
    site: 'https://sandracabello.github.io/',
    output:'static',
    base: process.env.PUBLIC_BASE_URL || './',
});
