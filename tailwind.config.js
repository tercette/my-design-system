/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}", 
    "./src/components/**/*.{ts,tsx}", 
    "./src/lib/**/*.{ts,tsx}",
    "./src/styles/**/*.{css}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        destructive: '#DC2626',
        accent: '#F59E0B',
        background: '#FFFFFF',
        foreground: '#1F2937',
        muted: '#9CA3AF',
        'muted-foreground': '#6B7280',
        border: '#E5E7EB',
        input: '#D1D5DB',
        card: '#F3F4F6',
        'card-foreground': '#111827',
        dark: {
          background: '#111827',
          foreground: '#F9FAFB',
          muted: '#374151',
          'muted-foreground': '#9CA3AF',
          border: '#1F2937',
          input: '#4B5563',
          card: '#1F2937',
          'card-foreground': '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Source Code Pro', 'monospace'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
      },
      borderRadius: {
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
