const NextI18Next = require('next-i18next').default;
module.exports = new NextI18Next({
  shallowRender: true,
  defaultLanguage: 'id',
  otherLanguages: ['en'],
  localeSubpaths: {
    id: 'id',
    en: 'en',
  }
})