import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow:{
        // '4xl':" rgba(0, 0, 0, 1) 2px 2px 4px, rgba(0, 0, 0, 1) -0.5px 7px , rgba(0, 0, 0, 1) 0px 0px  inset"
        '4xl':" 2px 8px 0px -2px rgba(0,0,0,1)"
      }
    },
  },
  plugins: [],
} satisfies Config;
