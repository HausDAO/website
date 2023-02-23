// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme');
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Stolzl', ...defaultTheme.fontFamily.sans],
      serif: ['Manofa', ...defaultTheme.fontFamily.serif],
      mono: ['BDR Mono', ...defaultTheme.fontFamily.mono],
      display: ['Manofa', 'serif'],
      heading: ['Manofa', 'serif'],
      body: ['Stolzl', 'sans-serif'],
    },
    extend: {
      colors: {
        brandRed: '#FE1D5B',
        brandBlue: '#1A28D1',
        brandGreen: '#11F487',
      },
      backgroundImage: {
        hero: "url('/img/bg-north-star.png')",
        fire: "url('/img/bg_fire.png')",
        aurora: "url('/img/dh_aurora.png')",
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
