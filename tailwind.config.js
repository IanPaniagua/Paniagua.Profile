/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Esquema de lujo: blanco, dorado, negro
        'luxury-black': '#000000',
        'luxury-dark': '#0a0a0a',
        'luxury-gray': '#1a1a1a',
        'luxury-white': '#ffffff',
        'luxury-cream': '#fafafa',
        'luxury-gold': '#d4af37',
        'luxury-gold-light': '#f4d03f',
        'luxury-gold-dark': '#b8860b',
        'luxury-gold-accent': '#ffd700',
        'luxury-silver': '#c0c0c0',
        'luxury-silver-light': '#e8e8e8',
        'luxury-silver-dark': '#808080',
      },
      fontFamily: {
        'luxury': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%)',
        'white-gradient': 'linear-gradient(135deg, #ffffff 0%, #fafafa 50%, #ffffff 100%)',
      },
      boxShadow: {
        'luxury': '0 10px 30px rgba(212, 175, 55, 0.1)',
        'luxury-gold': '0 4px 20px rgba(212, 175, 55, 0.3)',
        'luxury-white': '0 4px 20px rgba(255, 255, 255, 0.1)',
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