/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'primary-text': '#1E1F24',
      'secondary-text': '#62636C',
      'tertiary-text': '#80828D',
      'gray': '#8B8D98',
      'dark-gray': '#2C2D33',
      'light-gray': '#D8D9E0',
      'green': '#1B3D1F',
      'green-light': '#E6F8E7',
      'red': '#63192B',
      'red-light': '#FEEAEC',
      'orange': '#483B1C',
      'orange-light': '#FFF5DA',
      'blue': '#13296F',
      'blue-light': '#F6F9FF',
      'error': '#E53838',
    },
    extend: {},
  },
  plugins: [],
}

