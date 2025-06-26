import { defineCollection, z } from 'astro:content';

const modulosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    moduleNumber: z.number(),
    description: z.string(),
    duration: z.string().optional(),
    difficulty: z.enum(['Básico', 'Intermedio', 'Avanzado']).optional(),
    objectives: z.array(z.string()).optional(),
    keywords: z.array(z.string()).optional(),
    publishDate: z.date().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  'modulos': modulosCollection,
};

