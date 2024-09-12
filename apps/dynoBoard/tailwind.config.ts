import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      black:'#000000',
      customRed:{
        800:"#F6F0F0",
        900:"#DC272F",
      },
      customBlue: {
        300:"#049CB3",
        400:"#677E87",
        600:"#365F6F",
        700:"#14516A",
        800:"#022837",
        900: "#04374B",  
      },
      customWhite:{
        200:"#CFCFCF",
        300:"#CDCDCD",
        400:"#F8F8F8",
        500:"#FAFAFA",
        600:"#F7F7F7",
        700:"#E6EBEB",
        800:"#BDBDBE",
        900:"#FFFFFF",  
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    },
  },
  plugins: [],
};
export default config;
