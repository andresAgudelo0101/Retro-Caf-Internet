/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fuente: ["Tourney"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colores: {
          1: "#1b1a1a",
          2: "#0a0a0a",
          3: "#1a78d7",
        },
      },
    },
  },
  plugins: [],
};
