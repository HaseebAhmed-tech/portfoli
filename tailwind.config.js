/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  "./features/**/*.{js,ts,jsx,tsx,mdx}",
];
export const prefix = "";
export const theme = {
  conatiner: {
    center: true,
    padiing: "15px",
  },
  screens: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  fontFamily: {
    primary: "var(--font-jetbrains-mono)",
  },
  extend: {
    colors: {
      primary: "var(--primary)",
      background: "var(--background)",
      foreground: "var(--foreground)",
      secondrytext: "var(--secondrytext)",
      accent: {
        DEFAULT: "var(--accent)",
        hover: "var(--accent-hover)",
      },
      backgroundColor: {
        icons: "var(--icons)",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
  },
};
export const plugins = [require("tailwindcss-animate")];
