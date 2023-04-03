/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: "#171717",
      purple: "#6366F1",
      blue: "#4ADE80",
      light: "#86EFAC",
      white: "#EDE9FE",
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
