import type { Config } from 'tailwindcss';

const config: Config = {
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
        'glow-rainbow': '0 0 25px -5px rgba(139, 92, 246, 0.25), 0 0 20px -5px rgba(244, 63, 94, 0.2)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 25%, #06b6d4 50%, #10b981 75%, #f59e0b 100%)',
        'gradient-chromatic': 'linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6, #10b981)',
      },
    },
  },
  plugins: [],
};

export default config;
