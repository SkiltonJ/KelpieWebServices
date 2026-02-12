/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'deep-teal': '#006B7D',
        'dark-teal': '#005161',
        'navbar-teal': '#0f6375',
        'slate': '#3E4A5B',
        'warm-sand': '#D4A574',
        'sunset-orange': '#FFA500',
        'off-white': '#F7F5F2',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
