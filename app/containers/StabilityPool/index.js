/**
 *
 * StabilityPool
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';

import messages from './messages';

export function StabilityPool({ intl }) {
  const description = intl.formatMessage({ ...messages.description });
  const keywords = intl.formatMessage({ ...messages.keywords });
  const name = intl.formatMessage({ ...messages.name });

  return (
    <div>
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
    </div>
  );
}

StabilityPool.propTypes = {
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

const InjectedComponent = injectIntl(StabilityPool);

export default compose(withConnect)(InjectedComponent);
