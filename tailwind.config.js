/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'homepage-text': '980px',
        'homepage-hi': '950px',
        'homepage-hi2': '900px',
        'homepage-hi3': '725px',
        'homepage-hi4': '400px',
        'mobile': '620px',
      },
      borderRadius: {
        'right':'10px 0px 0px 10px',
        'left':'0px 10px 10px 0px',
      },
      backgroundImage: {
        'homepage': 'linear-gradient(180deg, #FFFFFF 0%, #F0EDE5 100%)',
        'homepage-dark': 'linear-gradient(180deg, #333333 0%, #1D1D1D 100%)',
        'projects': 'linear-gradient(180deg, #F0EDE5 0%, #FFFFFF 100%)',
        'projects-dark': 'linear-gradient(180deg, #1D1D1D 0%, #333333 100%, #333333 100%)',
        'profile': 'linear-gradient(180deg, #FFFFFF 0%, #F0EDE5 100%)',
        'profile-dark': 'linear-gradient(180deg, #333333 0%, #1D1D1D 100%)',
        'contact': 'linear-gradient(180deg, #F0EDE5 0%, #FFFFFF 100%)',
        'contact-dark': 'linear-gradient(180deg, #1D1D1D 0%, #333333 100%)',
      },
      fontFamily: {
        'heading': ['Cinzel','sans-serif'],
        'paragraph': ['Fauna One','sans-serif'],
      },
      animation: {
        slideup: 'slideup 0.5s ease-in-out',
        slidedown: 'slidedown 0.5s ease-in-out',
        slideleft: 'slideleft 2s ease-in-out',
        slideright: 'slideright 0.5s ease-in-out forwards',
        wave: 'wave 1.2s linear ease-in-out',
        slightrotate: 'slightrotate 1s ease-in-out forwards',
        clickhere: 'clickhere 2s ease-in-out infinite',


      },
      fontSize: {
        big: '52px',
        med: '30px',
        sm: '19px',
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slidedown: {
          from: { opacity: 0, transform: 'translateY(-25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slideleft: {
          from: { opacity: 0, transform: 'translateX(-20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideright: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        wave: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        slightrotate: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': {transform: 'rotate(2deg)'},
          '100%':   { transform: 'rotate(0deg)' }
        },
        clickhere: {
          '0%': { transform: 'rotate(0deg) scale(.70)' },
          '50%': {transform: 'rotate(5deg) scale(0.8)'},
          '100%':   { transform: 'rotate(0deg) scale(.70)' }
        },
      }
    },
  },
  plugins: [],
}