const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'blacky-black': '#000000',
                'lacky-blacky': '#0A121E',
                'blue-dust': '#455A74',
                'blue-sky': '#E7F1FB',
                'blue-cloud': '#D9E9FA',
                'blue-water': '#1673FF'
            },
            fontFamily: {
                'sequel': ['Sequel', ...defaultTheme.fontFamily.sans],
                'sans': ['Open Sans', ...defaultTheme.fontFamily.sans]
            },
            fontSize: {
                '12px': '12px',
                '16px': '16px',
                '18px': '18px',
                '24px': '24px',
                '32px': '32px',
                '58px': '58px',
                '72px': '72px',
            },
            backgroundImage: {
                menuImg: "url('/nav/cubesRight.svg'), url('/nav/cubesLeft.svg')"
            },
            backgroundPosition: {
                menuPos: 'bottom right, bottom left'
            },
            backgroundSize: {
                menuSize: '33%, 33%'
            }
        },
    },
    plugins: [],
}
