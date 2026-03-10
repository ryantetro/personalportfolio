/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          100: '#ffffff',
          200: '#f8f9fb',
          300: '#f0f1f5',
        },
        border: 'rgba(0,0,0,0.08)',
        text: {
          DEFAULT: '#1a1d27',
          muted: '#6b7280',
        },
        primary: {
          DEFAULT: '#1d4ed8',
          glow: 'rgba(29,78,216,0.08)',
        },
        accent: {
          DEFAULT: '#2563eb',
          glow: 'rgba(37,99,235,0.06)',
        },
        success: '#16a34a',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '14px',
        sm: '8px',
      },
    },
  },
  plugins: [],
}
