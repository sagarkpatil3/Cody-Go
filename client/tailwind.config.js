/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // CSUSB brand colors for Cody Go
        'cody-blue': '#003087',
        'cody-gold': '#FFB81C',
      }
    },
  },
  plugins: [],
}