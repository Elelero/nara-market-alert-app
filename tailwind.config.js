/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0f1729',
          900: '#141d34',
          800: '#1b2740',
        },
      },
    },
  },
  plugins: [],
}
