/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '730px',
      'lg': '1024px',
      'xl': '1364px',
      '2xl': '1570px' 
    },
    extend: {

    },
  },
  plugins: [],
}

