/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'primary': '#ffde34',
        'error': '#c44569',
        'foreground': '#484748',
        'background': {
          DEFAULT: '#999999',
          dark: '#282728',
        },
        'typography': {
          DEFAULT: '#262626',
          dark: '#c8d6e5',
        },
      },
    },
  },
  plugins: [],
}
