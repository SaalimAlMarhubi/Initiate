module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        steinNav: "#273044",
        steinPink: "#FF4560",
        steinTeal: "#82C5B2",
        staffBlue: "#0CA9E0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
