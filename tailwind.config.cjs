/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation:{
        'fly-in-out': 'bunner 10s infinite'
      },
      keyframes: {
        bunner: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(1deg) scale(1.05)' }
        }
      }
    },
  },
  plugins: [],
};
