import localFont from 'next/font/local';

export const myFont = localFont({
    src: [
        {
            path: '../assets/fonts/Karla-VariableFont_wght.ttf',
            style: 'normal'
        },
        {
            path: '../assets/fonts/Karla-Italic-VariableFont_wght.ttf',
            style: 'italic'
        },
        {
            path: '../assets/fonts/static/Karla-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../assets/fonts/static/Karla-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
    ],
    display: 'swap',
})

