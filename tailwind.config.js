/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      reg: ["Graphik Regular"],
      med: ["Graphik Medium"],
      bla: ["Graphik Black"],
    },
    extend: {
      colors: { h2: "#2f363f", def: "#535b62", light: "#81878c" },
      boxShadow: {
        "3charbox":
          "0 4px 16px 0 rgb(0 0 0 / 15%), 0 1px 2px 0 rgb(0 0 0 / 7%), 0 0 1px 0 rgb(0 0 0 / 20%)",
      },
      animation: {
        topSlide: "topSlide 500ms ",
        leftSlide: "leftSlide 1s ",
        bottomSlide: "bottomSlide 1s ",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
