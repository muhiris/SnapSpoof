export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#AB1C24", // Replace with your desired red color code
        white: "#FFFFFF",
        black: "#000000",
        fund: "#F1ECEC",
        yellow:"#FFFC00",
        blue:"#0FADFF",
      },
    },
  },
  plugins: [require("daisyui")],
};
