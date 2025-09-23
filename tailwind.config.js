/** @type {import('tailwindcss').Config} */
module.exports = {
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
      // Добавляем новую анимацию 'shake'
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'rotate(-5deg)' },
          '20%, 40%, 60%, 80%': { transform: 'rotate(5deg)' },
        }
      },
      animation: {
        shake: 'shake 0.8s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
