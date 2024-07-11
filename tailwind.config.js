/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  darkMode: "class",
  content: ["./**/*.{html,js}"],

  theme: {
    screens: {
      "xs": "480px",
      "sm": "557px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1400px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        darkBg: "#0F172A", //black color
        mainColor: "#2ABB64", //green color
        redColor: "#FF8345", //red color
        blueColor: "#6589E6", //blue color
        textbolColor: "#2E2E2E", //text black color
        textlighColor: "#808080", //text gray color
      },
    },
    container: {
      center: true,
      DEFFOULT: "10px",
    },
  },
  plugins: [],
};
