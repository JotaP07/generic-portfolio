/** @type {import('tailwindcss').Config} */

const {fontFamily} = require('tailwindcss/defaultTheme')
const {color} = require("framer-motion");

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                mont: ['var(--font-mont)', ...fontFamily.sans],
            },
            colors: {
                dark: "#1b1b1b",
                light: "#f5f5f5",
                primary: "#B63E96", // 240,86,199
                primaryDark: "#58E6D9", // 80,230,217
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
            },
            backgroundImage: {
                bgDarkXl: 'linear-gradient(0deg, rgba(27, 27, 27, 1) 0%, rgba(27,27,27,0.85) 5%, rgba(27,27,27,0.7) 8.6%, rgba(27,27,27,0) 15%, rgba(27, 27, 27, 0) 50%, rgba(27,27,27,0) 88%, rgba(27,27,27,0.8) 91%, rgba(27,27,27,0.9) 94%,  rgba(27, 27, 27, 2) 100%)',
                bgDark: 'linear-gradient(0deg, rgba(27, 27, 27, 1) 0%, rgba(27,27,27,0.85) 5%, rgba(27,27,27,0.7) 8.6%, rgba(27,27,27,0) 15%, rgba(27, 27, 27, 0) 50%,  rgba(27,27,27,0) 88%, rgba(27,27,27,0.6) 96%,  rgba(27, 27, 27, 2) 100%)',
                bgLight: 'linear-gradient(0deg, rgba(245, 245, 245, 1) 0%, rgba(245,245,245,0.85) 5%, rgba(245,245,245,0.7) 8.6%, rgba(245,245,245,0) 15%, rgba(245, 245, 245, 0) 50%, rgba(245,245,245,0) 88%, rgba(245,245,245,0.8) 91%, rgba(245,245,245,0.9) 94%, rgba(245, 245, 245, 2) 100%)',
                bgLightXl: 'linear-gradient(0deg, rgba(245, 245, 245, 1) 0%, rgba(245,245,245,0.85) 5%, rgba(245,245,245,0.7) 8.6%, rgba(245,245,245,0) 15%, rgba(245, 245, 245, 0) 50%, rgba(245,245,245,0) 88%, rgba(245,245,245,0.6) 96%, rgba(245, 245, 245, 2) 100%)',
            },
        },
        screens: {
            '2xl': {max: '1535px'},
            // => @media (max-width: 1535px) { ... }

            'xl': {max: '1279px'},
            // => @media (max-width: 1279px) { ... }

            'lg': {max: '1023px'},
            // => @media (max-width: 1023px) { ... }

            'xmd': {max: '910px'},

            'md': {max: '767px'},
            // => @media (max-width: 767px) { ... }

            'sm': {max: '639px'},
            // => @media (max-width: 639px) { ... }

            'xs': {max: '479px'},
            // => @media (max-width: 479px) { ... }
        },
    },
    plugins: [],
}

