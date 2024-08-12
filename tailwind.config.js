/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'parallax-image': "url('https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?cs=srgb&dl=pexels-stywo-1054218.jpg&fm=jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors:{
        themeRed:"#ff545a",
        textGray:"#859098",
        textDarkGray:"#505866",
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

