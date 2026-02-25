/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        'brand-red': '#E50F33',
        'brand-blue': '#4A90E2',
        'dark-bg': '#0D0D0D',
        'card-bg': '#1A1A1A',
        'border-color': 'rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
