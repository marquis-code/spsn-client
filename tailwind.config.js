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
          DEFAULT: '#1d4e89', // Deep Blue from logo
          light: '#28AAE1', // Cyan from logo
          dark: '#033958',
        },
        secondary: {
          DEFAULT: '#E4222E', // Red from logo
          light: '#FC8181',
          dark: '#9B2C2C',
        },
        accent: {
          DEFAULT: '#2D3748',
          light: '#4A5568',
          dark: '#1A202C',
        },
        brand: {
          blue: '#1d4e89',
          red: '#E4222E',
          cyan: '#28AAE1',
          dark: '#033958',
          accent: '#00D1FF',
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
