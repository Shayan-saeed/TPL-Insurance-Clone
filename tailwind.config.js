/** @type {import('tailwindcss').Config} */
const { scrollbarGutter, scrollbarWidth, scrollbarColor } = require('tailwind-scrollbar-utilities');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '2px 4px 8px 0px #444'
      }
    },
  },
  plugins: [
    scrollbarGutter(),
    scrollbarWidth(),
    scrollbarColor(),
  ],
}

