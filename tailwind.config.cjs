module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'my-custom-color': '#0f0',
        'brown-color': '#535353c7',
      },
      screens: {
        'tablet-screen': '912px',
      },
      width: {
        '30per': '20%',
      },
    },
  },
  plugins: [],
};
