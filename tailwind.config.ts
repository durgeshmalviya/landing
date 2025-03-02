import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {keyframes: {
      typing: {
        '0%': { width: '0' },
        '100%': { width: '100%' },
      },
      blink: {
        '0%, 100%': { borderColor: 'transparent' },
        '50%': { borderColor: '#f87171' }, // Tailwind's red-400 color
      },
    },
    animation: {
      typing: 'typing 3.5s steps(40, end) forwards',
      blink: 'blink 0.75s step-end infinite',
    },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },fontFamily: {
        'body': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ],
        'sans': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ]
      }
    
    },
  },
  plugins: [],
} satisfies Config;
