/*
 * Liquidation Messages
 *
 * This contains all the text for the Liquidation container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Liquidation';

export default defineMessages({
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Liquidation - Liquity Land',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage:
      'Overview risky troves and liquidate positions with CR lower than 110%. See liquidation price of troves and potential profit.',
  },
  keywords: {
    id: `${scope}.keywords`,
    defaultMessage:
      'liquity, ethereum, lending, cryptocurrency, borrow, defi, ETH, trove, loan, frontend, LQTY, LUSD, collateral, debt, stake, protocol, blockchain, wallet, pool, rewards, gain, kickback, land, liquity land',
  },
});
