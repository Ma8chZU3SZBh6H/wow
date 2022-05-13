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
                'grey-dust': '#90A3BF',
                'faded-line': '#BFCCE0',
                'faded-cube': '#EAEEF2',
                'grey-foot': '#74849B'
            },
            fontFamily: {
                'sequel': ['Sequel', ...defaultTheme.fontFamily.sans],
                'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
                'inter': ['Inter', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                '10px': '10px',
                '12px': '12px',
                '14px': '14px',
                '16px': '16px',
                '18px': '18px',
                '20px': '20px',
                '24px': '24px',
                '32px': '32px',
                '36px': '36px',
                '38px': '38px',
                '58px': '58px',
                '72px': '72px',
            },
            backgroundImage: {
                menuImg: "url('/nav/cubesRight.svg'), url('/nav/cubesLeft.svg')",
                headerImg: "url('/home/header/cubes.svg')",
                howCubeOneImg: "url('/home/what/CubeOneLeftBottom.svg'), url('/home/how/CubeOneRightTop.svg')",
                howCubeTwoImg: "url('/home/what/CubeTwoRightTop.svg')",
                howCubeThreeImg: "url('/home/what/CubeThreeBottomRight.svg'), url('/home/how/CubeThreeLeftTop.svg')",
                optionCubeImg: "url('/home/option/cubes.svg')",
                tableTitleCubeImg: "url('/home/table/titleCubeBottomRight.svg')",
                tableTitleCubeTwoImg: "url('/home/table/titleCubeRightTop.svg')",
                tableTCubeImg: "url('/home/table/tCubeBottomRight.svg')",
                tableMCubeImg: "url('/home/table/mCubeBottomLeft.svg')",
                roadmapCubeImg: "url('/home/roadmap/cube.svg')",
                peopleCubesImg: "url('/home/people/cubeland.svg')",
                oceanCubesImg: "url('/home/ocean/cubeland.svg')",
                footerCubesImg: "url('/home/footer/cubeland.svg')",
            },
            backgroundPosition: {
                menuPos: 'bottom right, bottom left',
                headerPos: 'bottom right',
                howCubeOnePos: 'bottom left, top right',
                howCubeTwoPos: 'top 60px right ',
                howCubeThreePos: 'bottom right, left 40px top ',
                optionCubePos: 'bottom',
                tableTitleCubePos: 'bottom right',
                tableTitleCubeTwoPos: 'top right',
                tableTCubePos: 'bottom right',
                tableMCubePos: 'bottom left',
                roadmapCubePos: 'bottom right',
                peopleCubesPos: 'top',
                footerCubesPos: 'top left 27px',
            },
            backgroundSize: {
                menuSize: '33%, 33%',
                optionCubeSize: '100%',
                '100': '100%',
                footerCubesSize: '50%',
            },
            animation: {
                fadeIn: "fadeIn 3s ease-in forwards"
            },
            keyframes: {
                fadeIn: {
                    "0%": {opacity: 0},
                    "100%": {opacity: 1}
                }
            },
            variants: {
                animation: ["motion-safe"]
            }
        },
    },
    plugins: [],
}
