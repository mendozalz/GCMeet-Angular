/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'movil': {'max': '768px'},

      'tablet': {'max': '1279px'},
      
      'laptop': {'max': '1440px'},

    },
    extend: {},
  },
  plugins: [],
}