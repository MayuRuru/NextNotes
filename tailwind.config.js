/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {},
    fontFamily: {
      display: "var(--font-title)",
      body: "var(--font-text)",
    },
    colors: {
      black: "#252525",
      navbar: "#44403C",
      purple: "#6366F1",
      lightpurple: "#C084FC",
      blue: "#64DFDF",
      lightblue: "#80FFDB",
      green: "#4ADE80",
      lightgreen: "#86EFAC",
      white: "#EDE9FE",
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
