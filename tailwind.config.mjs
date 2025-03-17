// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          'brand-red': '#e63946',
          'dark-bg': '#0a0a0a',
          'card-bg': '#121212'
        },
        fontFamily: {
          'script': ['var(--font-script)', 'cursive', 'serif']
        }
      },
    },
    plugins: [],
  }