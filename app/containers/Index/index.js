/**
 *
 * Index
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';

import Header from './Header';
import Banner from './Banner';

import messages from './messages';

const Main = styled.main`
  width: 100%;
  max-width: 100%;
  padding: 0 1rem;

  @media only screen and (min-width: 540px) {
    max-width: 90%;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
`;

export function Index({ intl }) {
  const description = intl.formatMessage({ ...messages.description });
  const keywords = intl.formatMessage({ ...messages.keywords });
  const name = intl.formatMessage({ ...messages.name });

  return (
    <Fragment>
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <Header />
      <Main>
        <Banner />
      </Main>
    </Fragment>
  );
}

Index.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const InjectedComponent = injectIntl(Index);

export default compose(withConnect)(InjectedComponent);
