module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '14px': '1em'  // Adds a custom font size in em
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
