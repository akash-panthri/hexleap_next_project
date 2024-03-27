import type { Config } from "tailwindcss";

const config: Config = {
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
      boxShadow: {
        'spc': '0px 4px 8px rgba(0, 0, 0, 0.05)',
        'bx': ' 0px 8px 16px 0px #0000001A',
        'bx-inner': 'inset 0px 8px 16px 0px #0000001A',
      },
      backgroundColor :{
        "elem-dark":'#3B3E47',
      },
      colors: {
        'rockman-blue-300': '#2c9cf0',
        'grayed':'#dfdfdf'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
    },
    fontSize:{
adspc:['20px', '24.2px'],
addes:['12.8px', '19px'],
tmhd:['17px', '20.57px'],
tmtc:['12px', '14.52px'],
tmdl:['14px', '16.94px'],
sch1:['50px', '52.5px'],
sch2:['14px', '22.65px'],
sm_1:['14px', '21px'],
sm_2:['14px', '20.58px'],
lg_xl:['17px', '26.52px'],

    },
    },
  },
  plugins: [],
};
export default config;
