/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          dark: '#0B0F17',
          light: '#FFFFFF',
        },
        surface: {
          1: {
            dark: '#111827',
            light: '#F8FAFC',
          },
          2: {
            dark: '#1F2937',
            light: '#F1F5F9',
          },
          3: {
            dark: '#374151',
            light: '#E2E8F0',
          },
        },
        brand: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#475569',
          600: '#1E293B',
          700: '#0F172A',
          800: '#0B0F17',
          900: '#020617',
        },
        sky: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
        },
        emerald: {
          500: '#10B981',
          600: '#059669',
        },
        rose: {
          500: '#EF4444',
          600: '#DC2626',
        },
        amber: {
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter: '-0.025em',
        tight: '-0.02em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}
