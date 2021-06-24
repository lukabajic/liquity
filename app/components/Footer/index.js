/**
 *
 * Footer
 *
 */

import React from 'react';
import cn from 'classnames';

import './styles.css';

const Footer = ({ className }) => (
  <footer className={cn('Footer', className)}>
    <div className="Footer__links">
      <a
        className="Footer__link"
        target="_blank"
        rel="noreferrer"
        href="https://docs.liquity.org/"
      >
        <ion-icon name="document-text-outline" />
        <p>doc</p>
      </a>
      <a
        className="Footer__link"
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/LandLiquity"
      >
        <ion-icon name="logo-twitter" />
        <p>twitter</p>
      </a>
      <a
        className="Footer__link"
        target="_blank"
        rel="noreferrer"
        href="https://discord.com/invite/dqkUDhg7mb"
      >
        <ion-icon name="logo-discord" />
        <p>discord</p>
      </a>
    </div>
    <p className="Footer__email">team@liquityland.com</p>
  </footer>
);

Footer.propTypes = {};

export default Footer;
