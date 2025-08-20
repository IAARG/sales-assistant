/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // pega tudo dentro de app/
    "./components/**/*.{js,ts,jsx,tsx}", // caso tenha pasta de components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
