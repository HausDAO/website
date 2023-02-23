// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      red: '#FE1D5B',
      blue: '#1A28D1',
      green: '#11F487',
      black: '#010101',
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
        opensource: "url('/img/dh_opensource.svg')",
        communityowned: "url('/img/dh_communityowned.svg')",
        publicgood: "url('/img/dh_publicgood.svg')",
        aurora: "url('/img/dh_aurora.png')",
      },
    },
  },
  plugins: [],
};
