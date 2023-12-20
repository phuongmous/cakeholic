/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'yellow': '#fef3c7',
        'yellow-1': '#fcd34d',
        'black': '#000000',
        'cadetblue': 'cadetblue'
      },
      fontFamily: {
        'rubik' : 'Rubik Bubbles',
        'mono' : 'Roboto Mono'
      }
    },
  },
  plugins: [],
}