/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            colors: {
                primary: "#111727",
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};