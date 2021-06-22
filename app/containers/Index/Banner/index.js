import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from '../../../components/Button';
import { H1, P } from '../../../components/Elements';

import messages from './messages';

import './styles.css';

const Banner = () => (
  <section className="Banner">
    <H1 className="Banner__header">
      <FormattedMessage {...messages.header} />
    </H1>
    <P className="Banner__paragraph">
      <FormattedMessage {...messages.paragraph} />
    </P>
    <div className="Banner__presentation">
      <div className="Banner__images">
        <div className="Banner__large-image">
          <img src="https://source.unsplash.com/random/440x251" />
          <div className="Banner__small-image">
            <img src="https://source.unsplash.com/random/260x220" />
          </div>
        </div>
      </div>
      <div className="Banner__actions">
        <Button primary medium className="Banner__button">
          <FormattedMessage {...messages.primaryButton} />
        </Button>
        <Button
          secondary
          medium
          icon="caret-forward-outline"
          iconColor="#68d0ca"
        >
          <FormattedMessage {...messages.secondaryButton} />
        </Button>
      </div>
    </div>
  </section>
);

export default Banner;
