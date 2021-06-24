/*
 * Index Messages
 *
 * This contains all the text for the Index container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Index.Banner';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage:
      'Borrow interest-free LUSD against ETH as collateral and earn LQTY rewards',
  },
  paragraph: {
    id: `${scope}.paragraph`,
    defaultMessage:
      'Earn 99% of the frontend rewards through kickback rate for stability providers.',
  },
  primaryButton: {
    id: `${scope}.primaryButton`,
    defaultMessage: 'App',
  },
  secondaryButton: {
    id: `${scope}.secondaryButton`,
    defaultMessage: 'Watch video',
  },
});
