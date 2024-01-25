import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#005f73', // Deep blue for light mode
          dark: '#72ddf7',  // Lighter shade for dark mode
        },
        secondary: {
          light: '#e0e0e0', // Light grey for light mode
          dark: '#393e46',  // Darker grey for dark mode
        },
        accent: '#ffba08',   // Accent color for both modes
      },
    },
  },
  plugins: [],
};
export default config;
