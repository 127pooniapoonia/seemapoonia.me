/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#ff7043',
        'brand-dark': '#e64a19',
        surface: '#f5f5f5',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Lato', '"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
