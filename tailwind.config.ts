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
    },
  },
  plugins: [ require("daisyui") ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0c4a6e",
          "secondary": "#115e59",
          "accent": "#78716c",
          "neutral": "#92400e",
          "base-100": "#ffedd5",
          "info": "#4b5563",
          "success": "#059669",
          "warning": "#f59e0b",
          "error": "#dc2626",
        },
      },
    ],
  },
}

export default config