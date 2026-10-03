import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { kinds, topics } from './data/topics';

const topicIds = Object.keys(topics) as [keyof typeof topics, ...(keyof typeof topics)[]];

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				/** Small label shown above the hero title on splash pages. */
				eyebrow: z.string().optional(),
			}),
		}),
	}),
	/** Outside resources the site points to. See src/data/resources.yaml. */
	resources: defineCollection({
		loader: file('src/data/resources.yaml'),
		schema: z.object({
			title: z.string(),
			url: z.url(),
			source: z.string(),
			kind: z.enum(kinds),
			topics: z.array(z.enum(topicIds)).min(1),
			featured: z.boolean().default(false),
			note: z.string(),
		}),
	}),
};
