/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        mdd: "768px",
        lgg: "1276px",
        xl: "1440px",
        zz: "842px",
        clm: '1020',
        xxxl: "200px",
      },
    },
  },
  plugins: [],
};

