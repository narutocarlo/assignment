/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    textColor: {
      error: "#d86161",
      default: "#212121",
      white: "#fff",
      white2: "#fafafa",
      lighgrey: "#e6e6e6",
      grey: "#7a7a7a",
      primary: "#1597e4",

    },

    backgroundColor: {
      grey: "#7a7a7a",
      error: "#d86161",
      dark: "#212121",
      white: "#fff",
      white2: "#fafafa",
      lighgrey: "#e6e6e6",
      primary: "#1597e4",
    },
  },
  plugins: [],
};
