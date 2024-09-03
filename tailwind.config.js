/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#202020",
        black2: "#202020",
      },
    },
    screens: {
      // "3xl": { max: "1600px" },
      "2xl": { max: "1600px" },
      "1xl": { max: "1400px" },
      xl: { max: "1250px" },
      lg: { max: "1050px" },
      md: { max: "900px" },
      sm: { max: "480px" },
    },
  },
  plugins: [],
};
