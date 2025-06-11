/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'caribbean': {
          'orange': '#FB923C',
          'red': '#EF4444',
          'pink': '#EC4899',
          'yellow': '#FBBF24'
        },
        'orange': {
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C'
        },
        'red': {
          400: '#EF4444',
          500: '#DC2626',
          600: '#B91C1C'
        },
        'pink': {
          400: '#EC4899',
          500: '#DB2777',
          600: '#BE185D'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
} 