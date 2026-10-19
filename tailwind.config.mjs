/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#ff7043',
        'brand-dark': '#e64a19',
        'brand-soft': '#fff1ec',
        ink: '#0b1220',
        'ink-2': '#111a2e',
        surface: '#f6f7f9',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,24,40,.04), 0 4px 16px rgba(16,24,40,.06)',
        lift: '0 12px 32px -8px rgba(16,24,40,.18)',
      },
    },
  },
  plugins: [],
};
