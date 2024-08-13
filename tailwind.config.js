/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      scrollBehavior: {
        smooth: "smooth",
      },
      spacing: {
        128: "32rem", // Adds a new spacing value of 32rem (512px)
        144: "36rem", // Adds a new spacing value of 36rem (576px)
        // Add more values as needed
      },
    },
  },
  plugins: [],
};
