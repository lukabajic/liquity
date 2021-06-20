import React from 'react';
import { FormattedMessage } from 'react-intl';

import Link from '../../../components/Link';
import { H3, Footnote } from '../../../components/Elements';

import messages from './messages';

import logo from './logo.png';
import './styles.css';

const NAV_LINKS = [
  { label: messages.about, href: 'https://www.liquity.org/' },
  { label: messages.docs, href: 'https://docs.liquity.org/' },
  { label: messages.blog, href: 'https://medium.com/liquity' },
];

const Header = () => (
  <header className="Header">
    <nav className="Nav">
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

      <ul className="Nav__links">
        {NAV_LINKS.map(({ label, ...rest }, i) => (
          <li key={i}>
            <Link className="Nav__link" {...rest}>
              <FormattedMessage {...label} />
            </Link>
          </li>
        ))}
        <li>
          <Link className="Nav__app-link">
            <FormattedMessage {...messages.toApp} />
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
