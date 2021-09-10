import React from 'react';
import PropTypes from 'prop-types';

import Home from 'containers/Home';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const IndexPage = () => {
  return <Home />;
};

IndexPage.propTypes = {
  t: PropTypes.func,
};

// IndexPage.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'banner', 'features'],
// });

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'banner', 'features'])),
      // Will be passed to the page component as props
    },
  };
};

export default IndexPage;
