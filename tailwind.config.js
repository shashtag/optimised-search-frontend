/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      reg: ["Graphik Regular"],
      med: ["Graphik Medium"],
      bla: ["Graphik Black"],
    },
    extend: { colors: { h2: "#2f363f" } },
  },
  plugins: [require("@tailwindcss/forms")],
};
