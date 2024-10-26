import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './resume-builder/**/*.{js,ts,jsx,tsx,mdx}',
    './dev-analytics/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        flicker: 'flicker 5s ease infinite',
      },
      fontFamily: {
        'geist-mono': ['var(--font-geist-mono)'],
        'geist-sans': ['var(--font-geist-sans)'],
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter: 'brightness(1) saturate(1) blur(8px)',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'brightness(0.8) saturate(0.8) blur(8px)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
