const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./segments/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'blacky-black': '#000000',
                'lacky-blacky': '#0A121E',
                'blue-dust': '#455A74',
                'blue-sky': '#E7F1FB',
                'blue-cloud': '#D9E9FA',
                'blue-water': '#1673FF',
                'grey-dust': '#90A3BF'
            },
            fontFamily: {
                'sequel': ['Sequel', ...defaultTheme.fontFamily.sans],
                'sans': ['Open Sans', ...defaultTheme.fontFamily.sans]
            },
            fontSize: {
                '12px': '12px',
                '16px': '16px',
                '18px': '18px',
                '20px': '20px',
                '24px': '24px',
                '32px': '32px',
                '38px': '38px',
                '58px': '58px',
                '72px': '72px',
            },
            backgroundImage: {
                menuImg: "url('/nav/cubesRight.svg'), url('/nav/cubesLeft.svg')",
                headerImg: "url('/home/header/cubes.svg')",
                howCubeOneImg: "url('/home/how/CubeOneLeftBottom.svg'), url('/home/how/CubeOneRightTop.svg')",
                howCubeTwoImg: "url('/home/how/CubeTwoRightTop.svg')",
                howCubeThreeImg: "url('/home/how/CubeThreeBottomRight.svg'), url('/home/how/CubeThreeLeftTop.svg')",
                optionCubeImg: "url('/home/option/cubes.svg')",
            },
            backgroundPosition: {
                menuPos: 'bottom right, bottom left',
                headerPos: 'bottom right',
                howCubeOnePos: 'bottom left, top right',
                howCubeTwoPos: 'top 60px right ',
                howCubeThreePos: 'bottom right, left 40px top ',
                optionCubePos: 'bottom',
            },
            backgroundSize: {
                menuSize: '33%, 33%',
                optionCubeSize: '100%',
            }
        },
    },
    plugins: [],
}
