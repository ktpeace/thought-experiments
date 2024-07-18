import type { Config } from "tailwindcss";

// Tailwind breakpoints
// Breakpoint prefix	Minimum width	CSS
// sm	  640px	    @media (min-width: 640px) { ... }
// md	  768px	    @media (min-width: 768px) { ... }
// lg	  1024px	  @media (min-width: 1024px) { ... }
// xl	  1280px	  @media (min-width: 1280px) { ... }
// 2xl  1536px	  @media (min-width: 1536px) { ... }

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "pool-100": "#C5E6E8", // turquoiseish
        "pool-300": "#79C2C9",
        "pool-400": "#54B0B6",
        "pool-500": "#3AADB8", // Base Color
        "pool-600": "#2C9198",
        "pool-700": "#217378",
        "pool-800": "#18555A",
        "pool-900": "#0F373C",
        "dusky-100": "#f1f8fe",
        "dusky-200": "#e0e8f0",
        "dusky-300": "#393e43",
        "dusky-400": "#293038",
        "dusky-600": "#1e2529", // nearly black
        "dusky-700": "#191d22", // background
        "dusky-800": "#0d1012",
        "brick-500": "#d85347",
        "brick-600": "#b8453a",
        "brick-700": "#a73e31",
        "brick-800": "#853227",
        "moss-500": "#00ab6e", // dusty green
        "moss-600": "#009d64",
        "moss-700": "#00794a",
        "moss-800": "#005a34",
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
      screens: {
        betterhover: { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
};
export default config;
