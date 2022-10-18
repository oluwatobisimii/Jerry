/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ['DM Sans'],
        inter: ['Inter'],
        newYork: ['NewYork']
      },
      colors: {
        primary: '#a90000',
      }
    },
  },
  plugins: [],
}
