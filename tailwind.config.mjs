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
          1: "#f4f5f6",
          2: "#1c1d1e",
          3: "#d356dd",
          4: "#0071cd",
          5: "#0f740e",
          6: "#e70112",
        },
      },
    },
  },
  plugins: [],
};
