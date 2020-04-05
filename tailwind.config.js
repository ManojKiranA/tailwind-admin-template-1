module.exports = {
  theme: {
    extend: {
      colors: {
        "theme-color": "#486EDB",
        "theme-hover-color": "#2e59d9",
        "gray-50": "#f9fafb",
      },
      boxShadow: {
        default: "0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
