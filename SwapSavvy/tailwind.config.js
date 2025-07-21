// tailwind.config.js
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",  // <- Make sure jsx is included
    ],
    theme: {
        extend: {},
    },
    plugins: [
        // eslint-disable-next-line no-undef
        require('daisyui'),
    ],
    daisyui: {
        themes: ["light", "dark"],
    },
}
