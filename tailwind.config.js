/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {

      height: {
        '21vh': '21vh',
        '41vh': '41vh',
        '50vh': '50vh',
        '60vh': '60vh', // Diğer boyutlar eklenebilir
      },
    },
  },
  plugins: [],
}

