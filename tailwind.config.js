/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "forge-gray": "#000004",
        "forge-main": "#E32E2C",
        "forge-accent": "#4EC5B7",
      },
      width: {
        120: "75rem",
      },
    },
  },
  plugins: [],
};
