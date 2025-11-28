/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta Agua & Madera
        primary: {
          900: '#0A1A2F', // muy oscuro, elegante (backgrounds profundos, header)
          600: '#284B7A', // azul usable (botones, links, headers)
          accent: '#26C6DA', // Caribbean Blue (acentos, CTAs)
          light: '#A8FFF1', // Shallow water (fondos suaves)
        },
        brown: {
          700: '#6F4E37', // madera / fondo fuerte
          300: '#D6B79F', // arena clara, bordes y tarjetas
        },
        gray: {
          900: '#1A1A1A', // texto fuerte
          300: '#D1D1D1', // bordes / fondo suave
        },
        white: '#FFFFFF',
        'off-white': '#FAFAF8',

        // Semantic Aliases
        darkBg: '#0A1A2F', // primary-900
        surface: '#284B7A', // primary-600
        light: '#FAFAF8', // off-white (fixing text-light usage)
        'text-main': '#FAFAF8',
        'text-muted': '#D1D1D1',

        // Compatibility Aliases
        'luxury-gold': '#D6B79F', // brown-300
        'luxury-white': '#FAFAF8', // off-white
        'luxury-gray': '#D1D1D1', // gray-300
      },
      fontFamily: {
        'luxury': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'water-gradient':
          'linear-gradient(135deg, #0A1A2F 0%, #26C6DA 50%, #A8FFF1 100%)',
      },
      boxShadow: {
        'luxury': '0 10px 30px rgba(10, 26, 47, 0.15)',
        'luxury-gold': '0 4px 20px rgba(40, 75, 122, 0.3)',
        'luxury-white': '0 4px 20px rgba(168, 255, 241, 0.25)',
      },
      animation: {
        'luxury-glow': 'luxury-glow 2s ease-in-out infinite alternate',
        'luxury-fade': 'luxury-fade 1.5s ease-in-out',
      },
      keyframes: {
        'luxury-glow': {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)' },
        },
        'luxury-fade': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}; 