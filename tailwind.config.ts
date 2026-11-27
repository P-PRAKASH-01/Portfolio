import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
        serif: ['"Newsreader"', '"Cormorant Garamond"', "Georgia", "serif"],
      },
      colors: {
        dark: {
          bg: "#090A10",
          secondary: "#101116",
          surface: "#15161D",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#B5B5BE",
          muted: "#777984",
        },
        accent: {
          orange: "#FF7018",
          red: "#EF4444",
        },
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#FF7018", // Primary Orange
          600: "#EA5E08",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          orange: "#FF7018",
          red: "#EF4444",
        },
        signal: {
          emerald: "#10b981",
          amber: "#FF7018",
          red: "#EF4444",
          cyan: "#06b6d4",
        },
        fieldnote: {
          dark: {
            bg: "#090A10",
            surface: "#101116",
            elevated: "#15161D",
            border: "rgba(255, 255, 255, 0.08)",
            borderStrong: "rgba(255, 255, 255, 0.16)",
            text: "#FFFFFF",
            muted: "#B5B5BE",
          },
          light: {
            bg: "#F8F9FA",
            surface: "#FFFFFF",
            elevated: "#F1F5F9",
            border: "rgba(0, 0, 0, 0.08)",
            borderStrong: "rgba(0, 0, 0, 0.16)",
            text: "#0F172A",
            muted: "#64748B",
          },
        },
      },
      letterSpacing: {
        technical: "0.08em",
        tightest: "-0.03em",
      },
      maxWidth: {
        editorial: "72rem",
      },
      boxShadow: {
        technical: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        "technical-elevated": "0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
