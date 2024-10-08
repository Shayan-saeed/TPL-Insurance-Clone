/** @type {import('tailwindcss').Config} */
const { scrollbarGutter, scrollbarWidth, scrollbarColor } = require('tailwind-scrollbar-utilities');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    scrollbarGutter(),
    scrollbarWidth(),
    scrollbarColor(),
  ],
}

