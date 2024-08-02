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
          "linear-gradient(to bottom, #FEC403 5%,#FEC403 10%, #E98736 20%, #D95B5B 30%, #D86464 45%, #D77474 48%, #EBC2C2 60%, #F0DEDE 65%, #FFFFFF 100% )",
        "footer-gradient":
          "linear-gradient(to bottom, #FFFFFF 5%,#FDEBD2 15%, #FBE8A8 20%, #FEC403 48%, #FE9803 70%, #FE8603 90%)",
        "doner-gradient":
          "linear-gradient(to bottom, #FFFFFF 0%,#FFEBEB 5%, #FFEBEB 20%,#FFFFFF 50%)",
      },
      colors: {
        prigmayBG: "#FCFCFC",
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
