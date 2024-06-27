/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                 //to keep a check on index.html file and all files in src with following mentioned extensions
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}