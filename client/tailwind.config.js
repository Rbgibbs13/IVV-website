/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './dist/index.html',
    './src/**/*.{html,jsx}',
    './src/pages/**/*.{html,jsx}',
    './src/components/**/*.{html,jsx}'
],
  theme: {
    extend: {
      screens: {
        '2xl': '1536px',
        '3xl': '1800px',
      }
    },
  },
  plugins: [],
}

