/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      'brand-green': 'var(--color-brand-green)',
      'dark-bg': 'var(--color-dark-bg)',
      'card-bg': 'var(--color-card-bg)',
      'light-text': 'var(--color-light-text)',
      'muted-text': 'var(--color-muted-text)',
      'accent': 'var(--color-accent)',
    },
  },
};
export const plugins = [];
  