/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },

        clip: {
          '0%': {	clipPath: 'inset(0% 100% 0% 0%)'},
          '100%': { clipPath: 'inset(0%)' },
        }
      },
      animation: {
        wave: 'wave 1s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        clip: 'clip 0.5s ease-in-out',
      }
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animate"),],

}