/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        'md': '768px',
        'lg': '992px'
      },
      colors: {
        BuyBtn: '#1AD1B2',
        PriceText: "#888888",
        fqContainer: "#FFF7DB",
        subHeadingColor: "#3328BF",
        buyBtnHover: "rgb(30 199 170)",
      },
      boxShadow: {
        "card-shadow": "0 0 10px 1px #d6e3e1",
      }
    },
  },
  plugins: [],
};

