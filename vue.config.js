module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    proxy: 'https://xkcd.com/',
  },
};
