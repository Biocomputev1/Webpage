import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import svgToDataUri from "mini-svg-data-uri";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 4s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      const allColors = flattenColorPalette(theme("colors"));
      const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({ ":root": newVars });
    }),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "bg-dot-thick": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    }),
    tailwindcssAnimate,
  ],
} satisfies Config;
