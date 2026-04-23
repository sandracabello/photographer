import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    thumbnail: z.string(),
    description: z.string(),
    location: z.string(),
  }),
});

export const collections = { events };