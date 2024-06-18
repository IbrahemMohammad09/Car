/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '__brown': {
          DEFAULT: '#965933'
        },
        '__dark_white': {
          DEFAULT: '#f9fafa'
        },
        __opacity_white: {
          DEFAULT: '#ffffff2e'
        }
      }
    },
  },
  plugins: [],
}