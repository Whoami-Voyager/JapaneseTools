/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        japaneseRed: "#BC002D",
        cherryBlossom: "#FFB7C5"
      },
      fontFamily: {
        Japanese: ['Japanese', 'sans-serif'],
        TTNorms: ['TTNorms', 'sans-serif']
      }
    },
  },
  plugins: [],
}