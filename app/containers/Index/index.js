/**
 *
 * Index
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import Header from './Header';

import messages from './messages';

export function Index() {
  return (
    <Fragment>
      <Helmet>
        <title>Liquity Land</title>
        <meta
          name="description"
          content="The Most Simple Frontend for Liquity decentralized borrowing protocol. Draw interest free loans against ETH as collateral. Earn ETH and LQTY tokens by depositing LUSD to Stability Pool. "
        />
        <meta
          name="keywords"
          content="liquity, ethereum, lending, cryptocurrency, borrow, defi, ETH, trove, loan, frontend, LQTY, LUSD, collateral, debt, stake, protocol, blockchain, wallet, pool, rewards, gain, kickback, land, liquity land"
        />
      </Helmet>
      <Header />
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

export default compose(withConnect)(Index);
