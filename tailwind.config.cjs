/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

//      fontFamily: {
//   sans: ['Inter var', ...defaultTheme.fontFamily.sans],
// },
