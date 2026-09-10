module.exports = {
  plugins: [
    require('cssnano')({
      preset: ['default', {
        discardComments: { removeAll: true },
        minifyFontValues: { removeQuotes: false },
        minifySelectors: false,
      }],
    }),
  ],
};
