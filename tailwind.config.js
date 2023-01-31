/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],

  theme: {
    extend: {
      colors: {
       'color-icons': '#777',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 65s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        
      }
    },
    fontFamily: {
      logo: ['Dancing Script', 'cursive'],
      logo2: ['Dancing Script', 'cursive'],
      page: ['Caveat', 'cursive']
    }
  
  },
  plugins: [],

};