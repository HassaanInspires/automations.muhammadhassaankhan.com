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
        background: 'var(--bg)',
        foreground: 'var(--text)',
        elevated: 'var(--bg-elevated)',
        muted: {
          DEFAULT: 'var(--bg-muted)',
          foreground: 'var(--text-muted)',
        },
        border: 'var(--border)',
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-fg)',
        },
      },
      boxShadow: {
        'card-stacked': 'var(--shadow-card-stacked)',
        'card-stacked-dark': 'var(--shadow-card-stacked-dark)',
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
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
