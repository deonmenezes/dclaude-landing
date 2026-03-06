import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0B14",
        slate: "#10162C",
        signal: "#4AF0B4",
        cobalt: "#3462FF",
        rose: "#FF4D8D",
        sand: "#E6EDF9"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 10px 60px -20px rgba(52, 98, 255, 0.65)",
        card: "0 18px 45px -28px rgba(4, 14, 43, 0.7)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgba(231, 238, 255, 0.12) 1px, transparent 0)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease forwards",
        pulseGlow: "pulse-glow 2.4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
