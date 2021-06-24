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

import Footer from '../../components/Footer';

import Header from './Header';
import Banner from './Banner';
import Protocol from './Protocol';

import messages from './messages';
import background from './background.jpg';

import './styles.css';

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

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 125vw;
  width: 100vw;
  z-index: -1;
  background-image: url('${background}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
      <Background />
      <Main>
        <Banner />
        <Protocol />
        <Footer className="Index__footer" />
      </Main>
    </Fragment>
  );
}

Index.propTypes = {
  intl: PropTypes.any,
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
