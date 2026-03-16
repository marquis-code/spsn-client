/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00A8B5', // Teal/Cyan from logo
          light: '#4FD1C5',
          dark: '#087E8B',
        },
        secondary: {
          DEFAULT: '#E53E3E', // Red from logo
          light: '#FC8181',
          dark: '#9B2C2C',
        },
        accent: {
          DEFAULT: '#2D3748', // Dark grey/blue
          light: '#4A5568',
          dark: '#1A202C',
        },
        brand: {
          blue: '#1A365D', // Dark blue from logo
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }
    },
  },
  plugins: [],
}
