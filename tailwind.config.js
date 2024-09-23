/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        slowpulse15: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        slowpulse25: 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        whiskey: {
          50: "#fcf7f0",
          100: "#f8ecdc",
          200: "#efd5b9",
          300: "#e5b78c",
          400: "#dd9e6e",
          500: "#d1773e",
          600: "#c36133",
          700: "#a24c2c",
          800: "#823e2a",
          900: "#693525",
          950: "#381912",
        },
      },
      backgroundImage: {
        'main-bg': "url('../img/bg-1.webp')",
      },
      fontFamily: {
        alfa: ['"Alfa Slab One"', "serif"],
        opensans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
