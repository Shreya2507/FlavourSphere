/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #FEC403 0%, #E98736 6%, #D95B5B 13%, #D86464 21%, #D77474 24%, #EBC2C2 35%, #F0DEDE 41%, #FFFFFF 47%, #FDECE5 61%, #FDEBD2 66%, #FBE8A8 70% , #FEC403 86% , #FE9803 93%, #FE8603 100%)",

        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
