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
      keyframes: {
        slidein: {
          "0%": {
            opacity: "0",
            "margin-left": "100%",
            width: "300%",
          },
          "100%": {
            opacity: "1",
            "margin-left": "0%",
            width: "100%",
          },
        },
        slideHeaderLoad: {
          "0%": {
            opacity: "0",
            transform: "translateY(-10rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        navLoad: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        slidein: "slidein 0.5s",
        slideHeaderLoad: "slideHeaderLoad 3s",
        navLoad: "navLoad 1.5s",
      },
    },
    plugins: [],
  },
};
