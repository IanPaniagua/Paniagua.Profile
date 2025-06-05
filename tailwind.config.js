/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'darkBg': '#030303',
        'primary': '#5564eb',
        'secondary': '#D4C9BE',
        'light': '#F1EFEC',
      },
    },
  },
  plugins: [],
}; 