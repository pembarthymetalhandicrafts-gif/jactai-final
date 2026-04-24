/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0f",
        gold: "#cda349",
        sand: "#f5efe2",
        bronze: "#8a6b37"
      },
      boxShadow: {
        glow: "0 10px 30px rgba(205, 163, 73, 0.2)"
      }
    }
  },
  plugins: []
};
