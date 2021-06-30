/**
 *
 * Brand
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Link from '../Link';
import { H3, Footnote } from '../Elements';

import messages from './messages';
import logo from './logo.png';

function Brand() {
  return (
    <Link className="Brand" to="/">
      <img className="Brand__logo" src={logo} />
      <div className="Brand__text">
        <H3 className="Brand__name">
          <FormattedMessage {...messages.name} />
        </H3>
        <Footnote className="Brand__description">
          <FormattedMessage {...messages.description} />
        </Footnote>
      </div>
    </Link>
  );
}

Brand.propTypes = {};

export default Brand;
