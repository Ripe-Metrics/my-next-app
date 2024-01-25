import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
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
