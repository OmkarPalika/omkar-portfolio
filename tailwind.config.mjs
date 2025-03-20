// tailwind.config.mjs
import formsPlugin from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': 'var(--color-brand-green)',
        'brand-green-hover': 'var(--color-brand-green-hover)',
        'bg': 'var(--color-bg)',
        'card-bg': 'var(--color-card-bg)',
        'card-hover': 'var(--color-card-hover)',
        'text': 'var(--color-text)',
        'muted-text': 'var(--color-muted-text)',
        'accent': 'var(--color-accent)',
      },
      transitionDuration: {
        'fast': 'var(--transition-fast)',
        'normal': 'var(--transition-normal)',
        'slow': 'var(--transition-slow)',
      },
      animation: {
        'fadeIn': 'fadeIn var(--transition-fast) ease-in-out forwards',
        'fadeInStaggered': 'fadeInStaggered var(--transition-fast) ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInStaggered: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        'script': 'var(--font-script), cursive, serif',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  darkMode: 'class',
  plugins: [
    formsPlugin({
      strategy: 'class',
    }),
  ],
};

export default config;