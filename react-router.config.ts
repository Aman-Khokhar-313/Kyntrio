import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: './src/app',
	ssr: true,
	// Prerender static routes only, not catch-all routes
	prerender: ['/'],
} satisfies Config;
