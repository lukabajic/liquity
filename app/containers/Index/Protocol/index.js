/**
 *
 * Protocol
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import { H3, Body, H4 } from '../../../components/Elements';
import Link from '../../../components/Link';

import messages from './messages';

import './styles.css';

const ITEMS = [
  {
    header: messages.box1.header,
    content: messages.box1.content,
    cta: messages.box1.cta,
    href:
      'https://docs.liquity.org/faq/borrowing#how-can-the-protocol-offer-interest-free-borrowing',
  },
  {
    header: messages.box2.header,
    content: messages.box2.content,
    cta: messages.box2.cta,
    href:
      'https://docs.liquity.org/faq/borrowing#what-is-the-minimum-collateral-ratio-mcr-and-the-recommended-collateral-ratio',
  },
  {
    header: messages.box3.header,
    content: messages.box3.content,
    cta: messages.box3.cta,
    href:
      'https://docs.liquity.org/faq/general#can-liquity-be-upgraded-or-changed',
  },
  {
    header: messages.box4.header,
    content: messages.box4.content,
    cta: messages.box4.cta,
    href:
      'https://docs.liquity.org/faq/borrowing#what-is-the-minimum-collateral-ratio-mcr-and-the-recommended-collateral-ratio',
  },
];

const Box = styled.div`
  padding: 4.4rem 2.4rem 6.4rem;
  border-radius: 3rem;
  background-color: #fffafb;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Item = ({ header, content, cta, href }) => (
  <div className="Protocol__item">
    <H4 className="Protocol__item-header">
      <FormattedMessage {...header} />
    </H4>
    <Box>
      <Body className="Protocol__item-content">
        <FormattedMessage {...content} />
      </Body>
      <Link href={href} className="Protocol__item-link">
        <FormattedMessage {...cta} />
      </Link>
    </Box>
  </div>
);

const Protocol = () => (
  <section className="Protocol">
    <div className="Protocol__head">
      <H3 className="Protocol__header">
        <FormattedMessage {...messages.header} />
      </H3>
      <Body className="Protocol__description">
        <FormattedMessage {...messages.description} />
      </Body>
    </div>
    <div className="Protocol__body">
      {ITEMS.map((i, index) => (
        <Item key={index} {...i} />
      ))}
    </div>
  </section>
);

export default Protocol;
