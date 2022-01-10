module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'sm': { 'max': '767px' },
            // => @media (max-width: 767px) { ... }
            'md': { 'min': '768px' , 'max': '1279px' }
            // => @media (max-width: 1279px) { ... }
        },
        colors: {
            'white':'#ffffff',
            'brown': '#3d2514',
            'brown-light': '#ad7608',
            'yellow': '#ffc045',
            'light-yellow': '#ffc045',
            'red': '#bf2222',
            'red-dark': '#8d0303',
            'gray':'#cccccc',
            'blue': '#3b82f6',
        },
        boxShadow: {
            md: '10px 10px 20px #d8d8d8',
        },
        extend: {
            backgroundImage: {
                'navbar-poster': "url('/src/img/navbar.png')",
                'header-poster': "url('/src/img/poster3.png')",
                'middle-post-one':"url('/src/img/Burger-Image1.png')",
                'middle-post-two':"url('/src/img/burger-image2.png')",
                'middle-post-three':"url('/src/img/burger-image3.png')",
                'footer-poster':"url('/src/img/footer.png')",
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}