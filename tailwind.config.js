/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '200px', // custom breakpoint for screens 440px and below
      },
    },
  },
  plugins: [],
}

