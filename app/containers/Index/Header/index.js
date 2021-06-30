/**
 *
 * Header
 *
 */

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import cn from 'classnames';

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

const SUB_LINKS = [
  { label: messages.trove, to: '/trove' },
  { label: messages.stabilityPool, to: '/stability-pool' },
  { label: messages.stake, to: '/stake' },
  { label: messages.liquidation, to: '/liquidation' },
];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
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

        <ul className={cn('Nav__links', { Nav__open: navOpen })}>
          <button className="Nav__closer" onClick={() => setNavOpen(false)}>
            <ion-icon name="close-outline" />
          </button>

          {NAV_LINKS.map(({ label, ...rest }, i) => (
            <li key={i}>
              <Link className="Nav__link" {...rest}>
                <FormattedMessage {...label} />
              </Link>
            </li>
          ))}

          <li>
            <div className="Nav__link Nav__link--with-sub">
              <FormattedMessage {...messages.preview} />
              <ion-icon name="chevron-down-outline" />

              <ul className="Nav__subcategories">
                {SUB_LINKS.map(({ label, to }, i) => (
                  <li key={i}>
                    <Link className="Nav__link" to={to}>
                      <FormattedMessage {...label} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li>
            <Link className="Nav__app-link" href="https://app.liquityland.com">
              <FormattedMessage {...messages.toApp} />
            </Link>
          </li>
        </ul>

        <button className="Nav__opener" onClick={() => setNavOpen(true)}>
          <ion-icon name="menu-outline" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
