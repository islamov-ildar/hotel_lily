/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile_m: '375px', //mobile medium
        mobile_l: '425px', //mobile large
        fhd: '1900px',
      }
    },
    fontFamily: {
      cormorant: ["Cormorant", "sans-serif"],
      helvetica: ["Helvetica_Regular", "sans-serif"],
      helveticaLight: ["Helvetica_Light", "sans-serif"],
      ralewayRegular: ["RalewayRegular", "sans-serif"],
      montserratRegular: ["MontserratRegular", "sans-serif"],
      montserratMedium: ["MontserratMedium", "sans-serif"],
      montserratSemiBold: ["MontserratSemibold", "sans-serif"],
      aliceRegular: ["AliceRegular", "sans-serif"],
    },
    colors: {
      yellowMain: '#F2C452',
      whiteMain: '#FBF6ED',
      blueMain: '#2A657E',
      mainRed: '#F01414',
      mainPink: '#FF808F',
      mainGrey: '#999999',
    },
  },
  plugins: [],
}

