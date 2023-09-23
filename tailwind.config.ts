import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#9C00CD",
        sucess:'#4BB543'
      },
      fontWeight: {
        bold: "600",
        semibold: "500",
        medium: "400",
        regular: "300",
        light: "200",
      },
      fontSize: {
        "4xl": "50px",
        "3xl": "40px",
        "2xl": "35px",
        xl: "30px",
        lg: "25px",
        md: "22px",
        rg: "20px",
        sm: "18px",
        xs: "16px",
        xxs: "14px",
        xxxs: "12px",
      },
      screens: {
        xl: "1400px",
        lg: "1200px",
        md: "1000px",
        rg: "850px",
      },
    },
  },
  plugins: [],
};
export default config;
