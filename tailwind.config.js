/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          "gallery-pattern": "url('/gallery-bg.svg')",
      },
      colors: {
          primary: '#00FEFB',
          secondary: '#7D40FF',
      },
      fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'mango': ['Black Mango Semibold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
