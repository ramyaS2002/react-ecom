// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
      },
    },
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
      },
      fontFamily: {
        sans: ['"Sofia"', 'cursive'],
      },
    },
  },
  plugins: [],
};
