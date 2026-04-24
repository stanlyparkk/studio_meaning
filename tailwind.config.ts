import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
      },
      colors: {
        sand: "#f8f3eb",
        stone: "#5d4a3a",
        linen: "#fffdf9",
        gold: "#b58a53",
        champagne: "#efe0c6",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(102, 71, 38, 0.12)",
      },
      backgroundImage: {
        "paper-glow":
          "radial-gradient(circle at top, rgba(247, 231, 203, 0.48), transparent 40%), radial-gradient(circle at bottom right, rgba(209, 184, 137, 0.16), transparent 28%)",
      },
    },
  },
  plugins: [],
};

export default config;
