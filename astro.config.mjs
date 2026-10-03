// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://twoclaims.github.io',
	integrations: [
		starlight({
			title: 'Two Claims',
			description:
				'The most important question is “Is there a God?” — and there is more than enough evidence to answer it.',
			logo: { light: './src/assets/logo-light.svg', dark: './src/assets/logo-dark.svg' },
			customCss: ['./src/styles/theme.css'],
			components: {
				Hero: './src/components/Hero.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/TwoClaims/TwoClaims.github.io' },
			],
			sidebar: [
				{ label: 'Start here', link: '/start/' },
				{
					label: 'The Two Claims',
					items: [
						{ label: 'Claim 1 · The Question', slug: 'claims/the-question' },
						{ label: 'Claim 2 · The Answer', slug: 'claims/the-answer' },
					],
				},
				{
					label: 'The Evidence',
					items: [
						{ label: 'Lines of evidence', slug: 'evidence' },
						{ label: 'Jesus of history', slug: 'evidence/jesus' },
						{ label: 'The minimal facts', slug: 'evidence/minimal-facts' },
						{ label: 'Comparing explanations', slug: 'evidence/explanations' },
					],
				},
				{
					label: 'Your Response',
					items: [
						{ label: 'Honest objections', slug: 'respond/objections' },
						{ label: 'What would this mean for me?', slug: 'respond/what-now' },
					],
				},
				{ label: 'Go deeper', slug: 'resources' },
			],
		}),
	],
});
