export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2545',
          deep: '#061B33',
          line: '#1B3B66',
        },
        ink: '#0B1727',
        gold: {
          DEFAULT: '#F5B301',
          dark: '#D99C00',
        },
        accent: {
          DEFAULT: '#1D6FE0',
          soft: '#E8F0FC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '1240px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
}
