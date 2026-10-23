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
        dashboard: {
          sidebar: "#1A2352",
          primary: "#1A2352",
          background: "#F8FAFC",
          surface: "#FFFFFF",
          heading: "#1E293B",
          muted: "#64748B",
          success: "#15803D",
          warning: "#A16207",
          danger: "#B91C1C",
          info: "#1D4ED8",
        },
        brand: {
          white: "#ffffff",
          green: "#22c55e",
          "green-dark": "#16a34a",
          "green-light": "#4ade80",
          black: "#1e293b",
          charcoal: "#1e293b",
          gray: "#64748b",
          "gray-light": "#f1f5f9",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
