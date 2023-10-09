module.exports = {
  client: {
    service: {
      name: 'game-creator-map',
      // URL to the GraphQL API
      url: process.env.VUE_APP_BACKEND_URL,
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.ts',
      'src/**/*.js',
    ],
  },
}
