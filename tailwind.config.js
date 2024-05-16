/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'teal': '#006D5B',
      'teal-dark': '#1B4339',
      'teal-light': '#DBF5ED',
      'gray': '#858888',
      'gray-dark': '#1E2020',
      'gray-light': '#C8CACA',
      'white': '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}

