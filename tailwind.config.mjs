/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sg: ["Space Grotesk", 'Berlin Sans FB', 'sans-serif'],
				int: ["Inter", 'Segoe UI', 'sans-seri']
			},
		},
	},
	plugins: [],
}
