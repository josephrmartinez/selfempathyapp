/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      complaintColor: '#043D66',
      initialFeelingColor: '#699F96',
      underlyingFeelingColor: '#935A5A',
      needsColor: '#93b1c9'
    },
    extend: {},
  },
  plugins: [],
}
