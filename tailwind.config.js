/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      cormorant: ["Cormorant", "sans-serif"],
      helveticaCondensed: ["Helvetica_Condensed", "sans-serif"],
      helvetica: ["Helvetica_Regular", "sans-serif"],
      helveticaLight: ["Helvetica-Light", "sans-serif"],
      helveticaLight2: ["Helvetica-Light2", "sans-serif"],
    },
  },
  plugins: [],
}

