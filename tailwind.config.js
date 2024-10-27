/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2A9D8F',
        'light-green': '#F5FFFE', 
        'light-green-50': 'rgba(245, 255, 254, 0.5)' 
      },
    },
  },
  plugins: [],
}