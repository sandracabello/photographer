import { defineCollection, z, } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    thumbnail: z.string(),
    description: z.string(),
    location: z.string(),
  }),
});

export const collections = { events };