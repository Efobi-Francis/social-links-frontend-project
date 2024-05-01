/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      // => @media (min-width: 576px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },

    fontFamily: {
      Inter: ['inter', 'serif'],
    },

    colors: {
      'White': 'hsl(0,0%,100%)',
      'Green': 'hsl(75,94%,57%)',
      'Grey': 'hsl(0,0%,20%)',
      'Dark-Grey': 'hsl(0,0%,12%)',
      'Off-Black': 'hsl(0,0%,8%)'
    },

    extend: {},
  },
  plugins: [],
}

