/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-1': '#495E57',
        'color-2': '#F4CE14',
        'color-3': '#EE9972',
        'card-color': '#EDEFEE'
      },
      fontFamily: {
        'Marzaki': ['Markazi Text'],
        'Karla': ['Karla'],
      }
    },
  },
  plugins: [],
}

