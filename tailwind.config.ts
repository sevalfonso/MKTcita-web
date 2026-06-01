import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:   '#4285F4',
          green:  '#34A853',
          yellow: '#FBBC05',
          red:    '#EA4335',
        },
        dark: {
          DEFAULT: '#1A1A2E',
          deep:    '#0D1117',
        },
        neutral: {
          50:  '#F7F7F7',
          100: '#EEEEEE',
          200: '#DDDDDD',
          400: '#AAAAAA',
          500: '#888888',
          700: '#444D5C',
          900: '#1A1A2E',
        },
        primary: '#4285F4',
      },
      fontFamily: {
        heading: ['var(--font-plus-jakarta)', 'sans-serif'],
        body:    ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        tagline: '4px',
      },
    },
  },
  plugins: [],
}

export default config
