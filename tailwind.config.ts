import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'light-blue': '#DDE4EE',
        'green': '#9CBD85',
        'dark-green': '#7A9C6B',
        'pink': '#F2D4D4',
        'dark-brown': '#382B24',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
export default config
