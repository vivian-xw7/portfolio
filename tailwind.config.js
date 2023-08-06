/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: {
      content: ["./src/**/*.{html,js}"],
      options: {
        safelist: ['bg-moss'],
      },
    },
    darkMode: false,
    theme: {
      extend: {
        colors: {
          pine: '#3b732d',
          mustard: '#f9bc40',
          sand: '#fbd17d',
          mint: '#7fb099',
          moss: '#3d8865',
          pond: '#005f3a',
        },
        fontFamily: {},
      },
    },
    variants: {},
    plugins: [],
  };
  