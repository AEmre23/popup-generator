/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'max':'968px'},
      'bigscreen': {'min':'1680px'},
    },
    extend: {
        fontFamily: {
        'inter': ['Inter', 'sans-serif'] 
      },
    },
  },
  plugins: [
  ],
}