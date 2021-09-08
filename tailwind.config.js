const colors = require('tailwindcss/colors')
module.exports = {
    purge: {
        content: ['./public/**/*.html', './src/**/*.vue']
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            textOpacity: ['dark'],
            colors: {
                primary: '#EC6907',
                secondary: '#f6ae2d',
                neutral: '#f8f8f8',
            }
        },
        forms: {
            default: {
                checkbox: {
                    icon: '<svg fill="#f6ae2d" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>'
                },
            },
        }
    },
    variants: {
        extend: {
            backgroundColor: ['checked'],
            borderColor: ['checked'],
            ringColor: ['responsive', 'dark', 'focus-within', 'focus', 'checked', 'active', 'hover'],
            ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus', 'checked', 'active', 'hover'],
            ringOffsetWidth: ['responsive', 'focus-within', 'focus', 'checked', 'active', 'hover'],
            ringOpacity: ['responsive', 'dark', 'focus-within', 'focus', 'checked', 'active', 'hover'],
            ringWidth: ['responsive', 'focus-within', 'focus', 'checked', 'active', 'hover'],
        }
    },
    plugins: [
        // require('daisyui'),
        require("@tailwindcss/forms")({
            strategy: 'class',
        }),
    ],
    // daisyui: {
    //     styled: true,
    //     themes: false,
    //     rtl: false,
    //     themes: [{
    //         'mytheme': {                          /* your theme name */
    //             'primary' : '#a991f7',           /* Primary color */
    //             'primary-focus' : '#8462f4',     /* Primary color - focused */
    //             'primary-content' : '#ffffff',   /* Foreground content color to use on primary color */

    //             'secondary' : '#f6d860',         /* Secondary color */
    //             'secondary-focus' : '#f3cc30',   /* Secondary color - focused */
    //             'secondary-content' : '#ff5724', /* Foreground content color to use on secondary color */

    //             'accent' : '#37cdbe',            /* Accent color */
    //             'accent-focus' : '#2aa79b',      /* Accent color - focused */
    //             'accent-content' : '#ffffff',    /* Foreground content color to use on accent color */

    //             'neutral' : '#3d4451',           /* Neutral color */
    //             'neutral-focus' : '#2a2e37',     /* Neutral color - focused */
    //             'neutral-content' : '#ffffff',   /* Foreground content color to use on neutral color */

    //             'base-100' : '#ffffff',          /* Base color of page, used for blank backgrounds */
    //             'base-200' : '#f9fafb',          /* Base color, a little darker */
    //             'base-300' : '#d1d5db',          /* Base color, even more darker */
    //             'base-content' : '#1f2937',      /* Foreground content color to use on base color */

    //             'info' : '#2094f3',              /* Info */
    //             'success' : '#009485',           /* Success */
    //             'warning' : '#ff9900',           /* Warning */
    //             'error' : '#ff5724',             /* Error */
    //         },
    //     }, ],
    // },
}