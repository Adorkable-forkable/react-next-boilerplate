const path = require('path');

module.exports = {
  localePath: path.resolve('./public/static/locales'),
  localeSubpaths: {
    en: 'en',
    es: 'es',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
};
