/**
 *
 * Link
 *
 */

import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Link = ({ children, href, activeClassName, to, ...rest }) => {
  if (href)
    return (
      <a href={href} {...rest} target="_blank" rel="noreferrer">
        {children}
      </a>
    );

  return (
    <NavLink exact activeClassName={activeClassName} to={to} {...rest}>
      {children}
    </NavLink>
  );
};

Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  activeClassName: PropTypes.string,
};

export default memo(Link);
