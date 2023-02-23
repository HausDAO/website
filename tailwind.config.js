// eslint-disable-next-line no-undef

const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      red: '#FE1D5B',
      blue: '#1A28D1',
      green: '#11F487',
      black: '#010101',
      purple: colors.purple,
      white: colors.white,
    },
    fontFamily: {
      sans: ['Stolzl', 'sans-serif'],
      serif: ['Manofa', 'serif'],
      mono: ['BDR Mono', 'ui-monospace', 'SFMono-Regular'],
      display: ['Manofa', 'serif'],
      body: ['Stolzl', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        hero: "url('/img/bg-north-star.png')",
        fire: "url('/img/bg_fire.png')",
        aurora: "url('/img/dh_aurora.png')",
      },
    },
  },
  plugins: [],
};
