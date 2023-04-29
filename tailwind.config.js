/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        brand:"#FF0000",
        background:"#0F0F0F",
        myGray:"#222222",
        myGray2:"#303030",
      },
    },
  },
  plugins: [],
}

