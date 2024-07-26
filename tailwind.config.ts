import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind"

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        primary: "#03205e",
        secondary: "#343047",
        white: "#fdfdfd",
        black: "#1c1c1c",
        grey: "#ccc",
        lightGrey: "#f5f5f5",
        darkGrey: "#333",
        danger: "#ff5252",
        success: "#0b7906",
        warning: "#f7c600",
        info: "#0080ff",
        bg_1: 'rgba(10, 10, 10, 0.2)',
        box_1: 'rgba(255, 255, 255, 0.2)'
      },
      boxShadow: {
        shadow_1: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        custom: "100% 0% 100% 0% / 0% 50% 50% 100%"
      },
      fontFamily: {
        "bigShoulders": ["Big Shoulders Stencil Text", "sans- serif"]
      },
      screens: {
        xxs: "375px",
        "xs": "475px",
        "mlg": "950px",
      }
    },
  },
  plugins: [flowbite.plugin(), require('daisyui')],
};
export default config;
