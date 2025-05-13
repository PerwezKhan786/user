/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}" // ✅ Corrected: double asterisk and correct file extension pattern
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}