/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
        main:['Jost','sans-serif'],
        roboto:['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui:{
    styled: true,
    themes: false,
    base: false,
    utils: false,
    logs: false,
    rtl: false,
 
  }
}