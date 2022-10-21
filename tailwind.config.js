/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    colors: {
      'white': '#fff',
      'black': '#000',
      'gray-050': '#f2f2f2',
      'gray-400': '#7c7c8a',
      'gray-800': '#202024',
      'turq/300': '#28afb0'
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
        logo: 'Audiowide, arial'
      }
    },
  },
  plugins: [],
}
