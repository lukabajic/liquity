/*
 * StabilityPool Messages
 *
 * This contains all the text for the StabilityPool container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.StabilityPool';

export default defineMessages({
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Stability Pool - Liquity Land',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage:
      'Deposit LUSD to Stability Pool and earn ETH and LQTY rewards.',
  },
  keywords: {
    id: `${scope}.keywords`,
    defaultMessage:
      'liquity, ethereum, lending, cryptocurrency, borrow, defi, ETH, trove, loan, frontend, LQTY, LUSD, collateral, debt, stake, protocol, blockchain, wallet, pool, rewards, gain, kickback, land, liquity land',
  },
});
