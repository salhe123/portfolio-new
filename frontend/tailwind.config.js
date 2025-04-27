/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Keep your existing dark colors
        dark: {
          900: '#0d0d0d',
          800: '#1a1a1a',
          700: '#262626',
          600: '#333333',
          500: '#4d4d4d',
          400: '#666666',
          300: '#808080',
          200: '#999999',
          100: '#b3b3b3',
        },
        // Add simple light background colors
        light: {
          bg: '#f8f9fa', // Light background
          card: '#ffffff' // Light card background
        },
        // Keep your accent colors
        yellow: {
          600: '#f5b301',
          500: '#f7c948',
        },
      },
    },
  },
  plugins: [],
}

