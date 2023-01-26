/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          100: "#FFFFFFDE",
          200: "#b3b3b3",
          300: "#282828",
          400: "#404040",
          500: "#181818",
          600: "#121212",
        },
        primary: {
          green: "#42b883",
        },
        text: {
          dark: "#213547",
        },
      },
    },
  },
  plugins: [],
};
