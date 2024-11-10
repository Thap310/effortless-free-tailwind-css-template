/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ["./**/*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#08111F",
      primary: "#265380",
      blueCustom: "#265380",
      secondary: "#265380",
    },
    extend: {
      fontFamily: {
        roboto: ["roboto"],
      },
    },
  },
  plugins: [require("daisyui"), require("preline/plugin")],
});
