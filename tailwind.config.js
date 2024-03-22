/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ctYellow: "var(--clr-yellow)",
        ctDeepBlue: "var(--clr-deepBlue)",
        ctSkyBlue: "var(--clr-skyBlue)",
        ctDeepGray: "var(--clr-deepGray)",
        ctLightGray: "var(--clr-lightGray)",
        ctGhostWhite: "var(--clr-ghostWhite)",
        ctWhite: "var(--clr-white)",
        // Add more custom colors using the CSS variables
      },
    },
  },
  plugins: [require("daisyui")],
};
