/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#181818",
        secondary: "#FFFFFF",
        tertiary: "#664C33",
        accent: "#997359",
        auxiliary: "#33261A",
        supplementary: "#D9D1C3",
      },
      boxShadow: {
        card: "0px 15px 30px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
