import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: {
        "light": "hsl(148, 38%, 91%)",
        "medium": "hsl(169, 82%, 27%)", 
        "dark": "hsl(169, 82%, 15%)",
      },
      red: "hsl(0, 66%, 54%)",
      white: "hsl(0, 0%, 100%)",
      gray: {
        "medium": "hsl(186, 15%, 59%)",
        "dark": "hsl(187, 24%, 22%)"
      }
    }
  },
  plugins: [],
};
export default config;
