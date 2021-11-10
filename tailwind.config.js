module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.js"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                oswald: ["Oswald", "sans-serif"],
                "open-sans": ["Open Sans", "sans-serif"],
            },
            colors: {
                "yellow-custom": "#bfa065",
                "dark-custom": "#333333",
                "white-custom": "#ffffff",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};