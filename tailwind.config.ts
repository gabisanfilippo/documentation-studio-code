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
      height: {
        sidebar: "calc(100vh - 1.25rem)",
        template: "calc(100vh - 1.25rem - 2.25rem)",
      },
      width: {
        "main-full": "calc(100vw - 3rem - 18.75rem)",
        sidebar: "calc(3rem + 18.75rem)",
        "300px": "18.75rem",
      },
      backgroundColor: {
        "blue-06": "#007ACC",
        "base-16": "#333333",
        "base-19": "#252526",
        "base-20": "#1E1E1E",
      },
      colors: {
        "base-01": "#FFFFFF",
        "base-06": "#CCCCCC",
      },
      margin: {
        main: "calc(3rem + 18.75rem)",
      },
    },
  },
  plugins: [],
};
export default config;
