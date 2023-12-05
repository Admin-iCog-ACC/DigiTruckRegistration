module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'move': 'move 2s infinite',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(30px)' },
          '100%': { transform: 'translateX(0)' },
        }},
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        fredoka: ['Fredoka One']

      },
    },
  },
  variants: {},
  plugins: [],
};
