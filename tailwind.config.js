/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ced1d5",
          200: "#9da3ac",
          300: "#6c7582",
          400: "#3b4759",
          500: "#0a192f",
          600: "#081426",
          700: "#060f1c",
          800: "#040a13",
          900: "#020509"
        },
      }
    },
  },
  plugins: [],
}
