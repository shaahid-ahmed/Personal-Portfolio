/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Every token resolves to a CSS variable declared in globals.css, written as
        // space-separated RGB channels so Tailwind's /opacity modifiers keep working.
        // The legacy names (navy, surface, ocean, seafoam, crisp, cool) are preserved.
        navy: 'rgb(var(--base) / <alpha-value>)',
        base: 'rgb(var(--base) / <alpha-value>)',
        'base-alt': 'rgb(var(--base-alt) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-alt': 'rgb(var(--surface-alt) / <alpha-value>)',
        ocean: 'rgb(var(--ocean) / <alpha-value>)',
        seafoam: 'rgb(var(--seafoam) / <alpha-value>)',
        deep: 'rgb(var(--deep) / <alpha-value>)',
        sand: 'rgb(var(--sand) / <alpha-value>)',
        crisp: 'rgb(var(--crisp) / <alpha-value>)',
        cool: 'rgb(var(--cool) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)'
      },
      fontFamily: {
        display: ['var(--font-display)', 'Space Grotesk', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace']
      },
      borderRadius: {
        card: '0.875rem',
        pill: '999px'
      },
      boxShadow: {
        card: '0 1px 2px rgb(15 23 42 / 0.04), 0 8px 24px -12px rgb(15 23 42 / 0.10)',
        lift: '0 2px 4px rgb(15 23 42 / 0.05), 0 18px 40px -18px rgb(15 118 110 / 0.35)',
        glow: '0 0 0 1px rgb(15 118 110 / 0.25), 0 12px 32px -16px rgb(15 118 110 / 0.45)',
        inset: 'inset 0 1px 0 0 rgb(255 255 255 / 0.7)'
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)'
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'none' }
        },
        blink: {
          '0%, 45%': { opacity: '1' },
          '50%, 95%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(2%, -3%, 0) scale(1.06)' }
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        blink: 'blink 1.1s step-end infinite',
        drift: 'drift 22s ease-in-out infinite',
        bob: 'bob 2.2s ease-in-out infinite'
      }
    }
  },
  plugins: [],
};
