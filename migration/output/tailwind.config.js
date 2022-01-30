const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./output/**/*.html"],
  safelist: [
    'my-9'
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
