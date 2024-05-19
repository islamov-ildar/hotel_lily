/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      cormorant: ["Cormorant", "sans-serif"],
      helvetica: ["Helvetica_Regular", "sans-serif"],
      helveticaLight: ["Helvetica_Light", "sans-serif"],
      helveticaLightNormal: ["Helvetica_Light_Normal", "sans-serif"],
      helveticaThin: ["HelveticaThin", "sans-serif"],
      helveticaUltraLight: ["HelveticaUltraLight", "sans-serif"],
    },
  },
  plugins: [],
}

