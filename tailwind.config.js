/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      padding: "16px",
      center: true,
    },
    extend: {
      colors: {
        graynew: "#9A9EA6",
        primary: "#4475F2",
        dongker: "#181E4B",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
