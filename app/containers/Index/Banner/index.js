/**
 *
 * Banner
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from '../../../components/Button';
import { H1, Callout } from '../../../components/Elements';

import messages from './messages';
import bannerImg from './banner-img.png';

import './styles.css';

const Banner = () => (
  <section className="Banner">
    <H1 className="Banner__header">
      <FormattedMessage {...messages.header} />
    </H1>
    <Callout className="Banner__paragraph">
      <FormattedMessage {...messages.paragraph} />
    </Callout>
    <div className="Banner__presentation">
      <div className="Banner__image">
        <img src={bannerImg} alt="Banner" />
      </div>
      <div className="Banner__actions">
        <Button
          primary
          medium
          className="Banner__button Banner__button--left"
          href="https://app.liquityland.com"
        >
          <FormattedMessage {...messages.primaryButton} />
        </Button>
        <Button
          secondary
          medium
          icon="caret-forward-outline"
          iconColor="#68d0ca"
          href="https://youtube.com"
          blank
          className="Banner__button"
        >
          <FormattedMessage {...messages.secondaryButton} />
        </Button>
      </div>
    </div>
  </section>
);

export default Banner;
