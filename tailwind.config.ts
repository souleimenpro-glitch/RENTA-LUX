import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: {
      ink: "#101113", charcoal: "#191B1E", graphite: "#282B30",
      paper: "#F6F5F2", line: "#E9E8E4", muted: "#74777D",
      champagne: "#B69A70", "champagne-light": "#D1BC98"
    },
    fontFamily: { sans: ["var(--font-manrope)", "Arial", "sans-serif"], body: ["var(--font-inter)", "Arial", "sans-serif"] },
    letterSpacing: { editorial: "-0.055em" }
  }},
  plugins: []
};
export default config;