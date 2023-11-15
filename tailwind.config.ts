import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "next-orange": "#ff5c0a",
        "next-deep-black": "#1c1c1c",
        "next-green": "#238207",
      },
      boxShadow: {
        "next-shadow": "box-shadow: 1px 1px 4px #292828, -1px -1px 4px #292828",
      },
    },
  },
  plugins: [],
};
export default config;
