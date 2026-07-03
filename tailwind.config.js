/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
      },
      colors: {
        background: '#0C0C0C',
        textLight: '#D7E2EA',
      },
      keyframes: {
        footerDotsMove: {
          '0%': { transform: 'translate3d(0, -50%, 0)' },
          '100%': { transform: 'translate3d(-50%, -50%, 0)' },
        }
      },
      animation: {
        footerDotsMove: 'footerDotsMove 18s linear infinite',
      }
    },
  },
  plugins: [],
}
