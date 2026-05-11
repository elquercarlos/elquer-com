// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://elquer.com',
	integrations: [mdx(), sitemap()],
	security: {
		csp: {
			algorithm: 'SHA-256',
			directives: [
				"default-src 'self'",
				"img-src 'self' data: https:",
				"font-src 'self' data:",
				"connect-src 'self' https://*.mailerlite.com https://assets.mailerlite.com https://a.nel.cloudflare.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://stats.g.doubleclick.net",
				"frame-src https://*.mailerlite.com",
				"object-src 'none'",
				"base-uri 'self'",
				"form-action 'self' https://*.mailerlite.com",
				"upgrade-insecure-requests",
			],
			scriptDirective: {
				resources: [
					"'self'",
					"https://assets.mailerlite.com",
					"https://groot.mailerlite.com",
					"https://static.mailerlite.com",
					"https://www.googletagmanager.com",
				],
			},
			styleDirective: {
				resources: ["'self'", "https://groot.mailerlite.com"],
			},
		},
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
