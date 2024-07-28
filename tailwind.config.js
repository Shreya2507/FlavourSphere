/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #FEC403 0%, #E98736 10%, #D95B5B 18%, #D86464 40%, #D77474 48%, #EBC2C2 60%, #F0DEDE 65%, #FFFFFF 100% )",
      },
      colors: {
        navbarBg: "#FEC403",
        yellow: "#FCE2B1",
        headingGrey: "#897979",
        subtitleGrey: "#6A6868",

        button: "#D95B5B",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
