/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'White': 'hsl(0, 0%, 100%)',
        'Black': 'hsl(0, 0%, 0%)',
        'Dark Gray': 'hsl(0, 0%, 55%)',
        'Very Dark Gray': 'hsl(0, 0%, 41%)',
      }, 
      fontFamily: {
        'alata': ['Alata'],
        'josephin': ['Josephin'],
      },
    },
  },
  plugins: [],
}
