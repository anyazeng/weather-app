/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alimama: ["AlimamaFangYuanTiVF-Thin", "Helvetica"],
      },
      colors: {
        "dark-blue": "#191350",
      },
    },
  },
  plugins: [],
};
