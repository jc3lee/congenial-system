const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "input-light": "rgba(255, 255, 255, 0.5)",
        input: "rgba(255, 255, 255, 0.8)",
        primary: "#050803",
        red: colors.red,
      },
      fontFamily: {
        "bot": ["Roboto",],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
