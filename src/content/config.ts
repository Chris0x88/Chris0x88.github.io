import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.enum(['Live', 'New', 'SDK']),
    github: z.string().url().optional(),
    tags: z.array(z.string()),
    order: z.number().default(0),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
