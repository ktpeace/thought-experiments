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
        "pool-100": "#C5E6E8",
        "pool-300": "#79C2C9",
        "pool-400": "#54B0B6",
        "pool-500": "#3AADB8", // Base Color
        "pool-600": "#2C9198",
        "pool-700": "#217378",
        "pool-800": "#18555A",
        "pool-900": "#0F373C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        "10p": "10%",
        "20p": "20%",
        "30p": "30%",
        "40p": "40%",
        "50p": "50%",
        "60p": "60%",
        "70p": "70%",
        "80p": "80%",
        "90p": "90%",
      },
      height: {
        "screen-safe": "calc(100vh - 14px - env(safe-area-inset-bottom))",
      },
    },
  },
  plugins: [],
};
export default config;
