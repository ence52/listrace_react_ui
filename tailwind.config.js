/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors:{
        themeRed:"#ff545a",
        textGray:"#859098",
        lightGray:"#eef2f6",
      },
      height:{
        "256":"42rem"
      },
      aspectRatio: {
        '5/4': '5 / 4',
        '4/5': '4/5',
      },
    },
  },
  plugins: [],
}

