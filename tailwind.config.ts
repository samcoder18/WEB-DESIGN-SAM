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
        ink: '#050607',
        frost: '#D7E2EA',
      },
    },
  },
  plugins: [],
} satisfies Config;
