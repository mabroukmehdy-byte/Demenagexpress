/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#dc2626',
        dark: '#1f2937',
        accent: '#f97316',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#374151',
            a: {
              color: '#1e40af',
              '&:hover': {
                color: '#1e3a8a',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
}
