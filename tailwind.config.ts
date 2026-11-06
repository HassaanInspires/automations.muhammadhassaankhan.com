import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#121212',
        card: '#161616',
        border: '#262626',
        'border-hover': '#404040',
        foreground: '#f5f5f5',
        muted: '#a3a3a3',
        subtle: '#737373',
        lime: {
          DEFAULT: '#d4ff00',
          hover: '#c1eb00',
          muted: 'rgba(212, 255, 0, 0.1)',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Monaco',
          'Courier New',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
