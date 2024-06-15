export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        popup: "popup 300ms",
      },

      keyframes: {
        popup: {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        
      },
    },
  },
  plugins: [],
};
