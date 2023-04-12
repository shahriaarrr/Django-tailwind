/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./Config/**/*.{html, js}"],
  theme: {
    colors: {
      black: colors.stone,
      sky: colors.sky,
      violet: colors.violet
    },
    extend: {},
  },
  plugins: [],
}

