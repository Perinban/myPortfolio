/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0d1117",
        secondary: "#f0f6fc",
        tertiary: "#161b22",
        accent: "#a78bfa",
        auxiliary: "#21262d",
        supplementary: "#8b949e",
        "navbar-glass": "rgba(13, 17, 23, 0.6)",
        "navbar-border": "rgba(167, 139, 250, 0.15)",
        "navbar-highlight": "rgba(167, 139, 250, 0.08)",
        "navbar-shadow": "rgba(0, 0, 0, 0.4)",
        "navbar-inset": "rgba(167, 139, 250, 0.1)",
        "navbar-glow": "rgba(167, 139, 250, 0.7)",
        "linkedin": "#0A66C2",
        "github": "#24292e",
        "gmail": "#EA4335",
        "icon-bg-light": "#E6DEDD",
        "icon-bg-white": "#ffffff",
      },
      boxShadow: {
        card: "0px 15px 30px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        xs: "450px",
      },

    },
  },
  plugins: [],
};