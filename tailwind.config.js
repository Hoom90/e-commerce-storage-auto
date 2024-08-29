/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#FCA311",
        shadow: "#14213D",
        background: "#e5e5e5",
      },
    },
  },
  plugins: [],
};
