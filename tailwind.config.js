/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./js/**/*.{html,js}",
      "./en/**/*.{html,js}",
      "./weihnachtsgruss/**/*.{html,js}",
      "./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}