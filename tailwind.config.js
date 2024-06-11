/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        japaneseRed: "#BC002D"
      },
      fontFamily: {
        Japanese: ['Japanese', 'sans-serif']
      }
    },
  },
  plugins: [],
}