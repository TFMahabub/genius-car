/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'orange': '#FF3811',
      'p-text-color': '#737373',
      
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
