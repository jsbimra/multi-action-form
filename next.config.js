// next.config.js
const withStyles = require('@webdeb/next-styles')
const withSass = require('@zeit/next-sass')

const withStylesConfig = {
  sass: true, // use .scss files
  modules: true, // style.(m|module).css & style.(m|module).scss for module files,
}

const withSassConfig = {
  cssModule: true,
}

const nextConfig = {
    // target: 'serverless', //for this check https://nextjs.org/docs/api-reference/next.config.js/build-target
    exportTrailingSlash: true,
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        '/qrscan': { page: '/qrscan' },
      };
    },
    devIndicators: {
      autoPrerender: true,
    }
}

const config = {
  ...withStylesConfig,
  ...withSassConfig,
  ...nextConfig,
}

module.exports = withStyles(config)



// added on 1 Apr from Ex: : https://github.com/isaachinman/next-i18next/blob/master/examples/simple/next.config.js
// publicRuntimeConfig: {
//   localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
//     ? process.env.LOCALE_SUBPATHS
//     : 'none',
// },