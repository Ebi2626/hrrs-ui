/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'menu': 'url("/src/assets/menu_bg.jpg")',
        'hero': 'url("/src/assets/sports-and-leisure.jpg")'
      },
      colors: {
        'blue': {
          DEFAULT: '#071f5f',
          'darker': '#08335e'
        },
      },
    },
  },
  plugins: [],
}

