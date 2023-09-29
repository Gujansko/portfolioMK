/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        swingLeft: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-7px)" },
        },
        swingRight: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(7px)" },
        },
      },
      animation: {
        "spin-slow": "spin 8s ease-in-out infinite",
        "spin-slowest": "spin 16s ease-in-out infinite",
        "swing-left": "swingLeft 0.5s ease-in-out infinite alternate",
        "swing-right": "swingRight 0.5s ease-in-out infinite alternate",
      },
      screens: {
        vsm: "480px",
        tiny: "300px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate", require("tailwindcss"), require("autoprefixer")),
  ],
};
