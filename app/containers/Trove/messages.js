/*
 * Trove Messages
 *
 * This contains all the text for the Trove container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Trove';

export default defineMessages({
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Trove - Liquity Land',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage:
      'Deposit ETH as collateral and withdraw LUSD stablecoin with minimum collateral ratio of 110%. Manage your trove and have an overview of liquidation price and debt in front of me.',
  },
  keywords: {
    id: `${scope}.keywords`,
    defaultMessage:
      'liquity, ethereum, lending, cryptocurrency, borrow, defi, ETH, trove, loan, frontend, LQTY, LUSD, collateral, debt, stake, protocol, blockchain, wallet, pool, rewards, gain, kickback, land, liquity land',
  },
});
