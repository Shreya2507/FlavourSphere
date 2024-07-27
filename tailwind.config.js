/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #FFCCD5 0%, #FED9E0 27%, #FED9E0 40%, #FED9E0 85%, #FCFCFC 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
