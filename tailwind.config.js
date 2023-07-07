import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import daisyui from 'daisyui';
import daisyThemes from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],
    darkMode: ["class", '[data-theme="dark"]'],
    daisyui: {
        themes: [{
            // light : {
            //     ...daisyThemes["[data-theme=light]"],
            //     "primary": '#7c3aed',
            //     "primary-focus" : "#8b5cf6"
            // }
            light : {
                ...daisyThemes["[data-theme=corporate]"],
            },
            dark : {
                ...daisyThemes["[data-theme=business]"],
            }
        }, 
        "dark",
        "corporate",
        "cmyk",

    ],
        base: true
      },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [forms, daisyui],
};
