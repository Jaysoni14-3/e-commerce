/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-color": "#0E74BE",
        "secondary-color": "#FEC00F",
        "accent-color": "#004080",
        "background-color": "#EEEEEE",
        textWhite: "#f3f3f3",
        textBlack: "#1a1a1a",
      },
      fontFamily: {
        "header-font": ["Poppins", "sans-serif"],
        "body-font": ["Open Sans", "serif"],
      },
    },
  },
  plugins: [],
};
