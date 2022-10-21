/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#fff',
      'black': '#000',
      
      gray: {
        050: '#f2f2f2',
        150: '#e5e5e5',
        400: '#7c7c8a',
        800: '#202024',
      },
      turq: {
        300: '#28afb0',
        200: '#71E7E8'
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
        logo: 'Audiowide, arial',
        google: 'Roboto'
      }
    },
  },
  plugins: [],
}
