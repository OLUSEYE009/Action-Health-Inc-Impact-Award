/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A66C2',
        secondary: '#1E90FF',
        accent: '#FF8C00',
        background: '#F8FAFC',
        'background-dark': '#0A192F',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        serif: ['Impact', 'UI Serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 10px 30px rgba(2, 12, 27, 0.12)',
        cardDark: '0 10px 30px rgba(16, 39, 79, 0.45)',
      },
    },
  },
  plugins: [],
}