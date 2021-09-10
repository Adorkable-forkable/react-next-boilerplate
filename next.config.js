const { i18n, localeSubpaths } = require('./next-i18next.config');

module.exports = {
  i18n,
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
