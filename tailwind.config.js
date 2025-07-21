/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      light: ['Roboto Light', 'sans-serif'],
      medium: ['Roboto Medium', 'sans-serif'],
      bold: ['Roboto Bold', 'sans-serif'],
    },
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
};
