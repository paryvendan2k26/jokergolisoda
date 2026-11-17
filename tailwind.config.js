/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        joker: {
          red: '#C9232B',
          'red-dark': '#A31B22',
          'red-light': '#E0363F',
          cream: '#F7F0E5',
          'cream-light': '#FAF6F0',
          'cream-dark': '#EFE4D3',
          charcoal: '#1A1A1A',
          'charcoal-light': '#2D2D2D',
          navy: '#0C1929',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        sora: ['Sora', 'sans-serif']
      },
      boxShadow: {
        'subtle': '0 2px 12px rgba(0, 0, 0, 0.04)',
        'premium': '0 10px 30px -10px rgba(26, 26, 26, 0.08)',
        'elevated': '0 20px 40px -15px rgba(201, 35, 43, 0.12)',
      }
    },
  },
  plugins: [],
}
