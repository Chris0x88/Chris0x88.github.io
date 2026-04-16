/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b1020',
        panel: '#0f162b',
        line: '#1c2440',
        ink: '#e6edf7',
        mute: '#94a3b8',
        accent: '#58a6ff',
        accent2: '#50d2c1',
        warn: '#ffd21e',
        danger: '#ff6b6b'
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        outfit: ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}
