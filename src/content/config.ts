import { defineCollection, z } from 'astro:content';
import { date } from 'astro:schema';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    thumbnail: z.string(),
    description: z.string(),
    date: date(),
    rendered: z.string(),
    filePath: z.string(),
    data: z.object({
      location: z.string(),
    }),
  }),
});

export const collections = { events };