/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [require('@tailwindcss/typography')],
    content: [
      './resources/**/*.html',
      './resources/**/*.js',
      // Add other file paths containing your CSS classes
    ],
    darkMode: false,
    theme: {
      extend: {
        colors: {
          pine: '#3b732d',
          mustard: '#f9bc40',
          sand: '#fbd17d',
          mint: '#7fb099',
          moss: '#3d8865',
          // pond: '#005f3a',
          pond: '#003f5c',
        },
        fontFamily: {
          roboto: [
            'Roboto',
            'sans-serif',
            'Montserrat'
          ],
          plex: [
            '"IBM Plex Sans"',
          ],
        },
      },
    },
    variants: {},
    plugins: [],
  };
  