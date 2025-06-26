/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#111827',
        'dark-secondary': '#1F2937',
        'accent-gold': '#D97706',
        'accent-red': '#991B1B',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Oswald', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

