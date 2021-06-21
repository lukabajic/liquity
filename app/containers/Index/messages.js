/*
 * Index Messages
 *
 * This contains all the text for the Index container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Index';

export default defineMessages({
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Liquity Land',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage:
      'The Most Simple Frontend for Liquity decentralized borrowing protocol. Draw interest free loans against ETH as collateral. Earn ETH and LQTY tokens by depositing LUSD to Stability Pool.',
  },
  keywords: {
    id: `${scope}.keywords`,
    defaultMessage:
      'liquity, ethereum, lending, cryptocurrency, borrow, defi, ETH, trove, loan, frontend, LQTY, LUSD, collateral, debt, stake, protocol, blockchain, wallet, pool, rewards, gain, kickback, land, liquity land',
  },
});
