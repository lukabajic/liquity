/*
 * Stake Messages
 *
 * This contains all the text for the Stake container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Stake';

export default defineMessages({
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Stake - Liquity Land',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage:
      'Stake LQTY to earn ETH and LUSD as share of borrowing and redemption fees.',
  },
  keywords: {
    id: `${scope}.keywords`,
    defaultMessage:
      'liquity, ethereum, lending, cryptocurrency, borrow, defi, ETH, trove, loan, frontend, LQTY, LUSD, collateral, debt, stake, protocol, blockchain, wallet, pool, rewards, gain, kickback, land, liquity land',
  },
});
