const mix = require('laravel-mix');

mix.setPublicPath('public');

mix.postCss('resources/css/app.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
]);
