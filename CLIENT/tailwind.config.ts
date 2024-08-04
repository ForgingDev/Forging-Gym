import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F87171',
          normal: '#E6134C',
          dark: '#991B4D',
        },
        text: {
          primary: '#f4f4f5',
          secondary: '#d4d4d8',
          'primary-normal': '#1f2937',
        },
        background: {
          'dark-red': '#400000',
          'dark-purple': '#150b16',
        },
      },
    },
  },
  plugins: [],
};
export default config;
