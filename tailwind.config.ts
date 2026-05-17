import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['TT Firs Neue', 'TT Firs Neue Trial', 'TT Firs Neue Trl', 'Unbounded', 'sans-serif'],
        sans: ['ALS Hauss', 'ALS Hauss Hairline', 'ALS Hauss Thin', 'Manrope', 'sans-serif'],
        editorial: ['ALS Hauss', 'ALS Hauss Hairline', 'ALS Hauss Thin', 'Manrope', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ink: '#0A0C12',
        frost: '#D7E2EA',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
      },
      ringColor: {
        ring: 'hsl(var(--ring) / <alpha-value>)',
      },
      ringOffsetColor: {
        background: 'hsl(var(--background) / <alpha-value>)',
      },
    },
  },
  plugins: [],
} satisfies Config;
