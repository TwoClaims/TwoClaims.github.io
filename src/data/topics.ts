/** Resource topics, in the order the library lists them. */
export const topics = {
	history: 'The historical case',
	philosophy: 'Philosophy & science',
	objections: 'Questions & objections',
	bible: 'Reading the Bible',
	gospel: 'The gospel',
} as const;

export type Topic = keyof typeof topics;

export const kinds = ['Website', 'Video', 'Book', 'Article', 'Podcast', 'Course'] as const;

export type Kind = (typeof kinds)[number];
