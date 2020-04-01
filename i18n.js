const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  shallowRender: true,
  localePath:  typeof window === 'undefined' ? 'public/static/locales' : 'static/locales',
  preload: ['id'],
  defaultLanguage: 'id',
  otherLanguages: ['en'],
  localeSubpaths: { //old lnes
    id: 'id',
    en: 'en',
  },
})

// detection: {
//   lookupCookie: 'next-i18next',
//   order: ['cookie', 'querystring', 'localStorage', 'path', 'subdomain'],
//   caches: ['cookie'],
// },
//added detection code from here: on 1 Apr 2020 for fixing an error occoured on server and not loading default i18n paths on server side
// https://github.com/isaachinman/next-i18next/issues/273


// Added on 1 Apr from eg: https://github.com/isaachinman/next-i18next/blob/master/examples/simple/i18n.js

//new line 1 apr
// const { localeSubpaths } = require('next/config').default().publicRuntimeConfig

// const localeSubpathVariations = {
//   none: {},
//   foreign: {
//     id: 'id',
//   },
//   all: {
//     en: 'en',
//     id: 'id',
//   },
// }
// localeSubpaths: localeSubpatchVariations[localeSubpaths],


  //added for fixing of react-i18next:: i18n.languages were undefined or empty undefined
  // localePath:  typeof window === 'undefined' ? 'public/static/locales' : 'static/locales'
  // https://github.com/isaachinman/next-i18next/issues/374
