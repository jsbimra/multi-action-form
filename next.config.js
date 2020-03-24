// next.config.js
const withStyles = require('@webdeb/next-styles')

module.exports = withStyles({
  // target: 'serverless', //for this check https://nextjs.org/docs/api-reference/next.config.js/build-target
  distDir: 'build',
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/qrscan': { page: '/QRscan' }
    };
  },
  sass: true, // use .scss files
  modules: true, // style.(m|module).css & style.(m|module).scss for module files,
  devIndicators: {
    autoPrerender: true,
  }
})
