/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary))',
        'primary-50': 'rgba(var(--color-primary), 0.05)',
        'primary-100': 'rgba(var(--color-primary), 0.1)',
        'primary-200': 'rgba(var(--color-primary), 0.2)',
        'primary-300': 'rgba(var(--color-primary), 0.3)',
        'primary-400': 'rgba(var(--color-primary), 0.4)',
        'primary-500': 'rgba(var(--color-primary), 0.5)',
        'primary-600': 'rgba(var(--color-primary), 0.6)',
        'primary-700': 'rgba(var(--color-primary), 0.7)',
        'primary-800': 'rgba(var(--color-primary), 0.8)',
        'primary-900': 'rgba(var(--color-primary), 0.9)',
        
        secondary: 'rgb(var(--color-secondary))',
        'secondary-50': 'rgba(var(--color-secondary), 0.05)',
        'secondary-100': 'rgba(var(--color-secondary), 0.1)',
        'secondary-200': 'rgba(var(--color-secondary), 0.2)',
        'secondary-300': 'rgba(var(--color-secondary), 0.3)',
        'secondary-400': 'rgba(var(--color-secondary), 0.4)',
        'secondary-500': 'rgba(var(--color-secondary), 0.5)',
        'secondary-600': 'rgba(var(--color-secondary), 0.6)',
        'secondary-700': 'rgba(var(--color-secondary), 0.7)',
        'secondary-800': 'rgba(var(--color-secondary), 0.8)',
        'secondary-900': 'rgba(var(--color-secondary), 0.9)',
        
        accent: 'rgb(var(--color-accent))',
        success: 'rgb(var(--color-success))',
        warning: 'rgb(var(--color-warning))',
        error: 'rgb(var(--color-error))',
        
        background: 'rgb(var(--color-background))',
        'background-light': 'rgb(var(--color-background-light))',
        
        white: 'rgb(var(--color-text))',
        'text-muted': 'rgb(var(--color-text-muted))',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at 50% 50%, rgba(var(--color-primary), 0.15) 0%, rgba(10, 12, 16, 0) 70%)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};