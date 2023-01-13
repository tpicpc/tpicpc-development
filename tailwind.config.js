/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
  },
  container: {
      center: true,
      padding: {
          DEFAULT: "1rem",
          lg: "3rem",
      },
  },
    extend: {
      colors: {
        primary: "#4a83c4",
        secondary: "#667085",
        cpcYellow: "#fbba31",
        cpcRed: "#b32a1c",
    },
    },
  },
  plugins: [],
}
