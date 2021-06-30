/*
 * Index Messages
 *
 * This contains all the text for the Index container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Index.Header';

export default defineMessages({
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Liquity Land',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'The most simple front-end',
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: 'About',
  },
  docs: {
    id: `${scope}.docs`,
    defaultMessage: 'Docs',
  },
  blog: {
    id: `${scope}.blog`,
    defaultMessage: 'Blog',
  },
  preview: {
    id: `${scope}.preview`,
    defaultMessage: 'Preview',
  },
  trove: {
    id: `${scope}.trove`,
    defaultMessage: 'Trove',
  },
  stabilityPool: {
    id: `${scope}.stabilityPool`,
    defaultMessage: 'Stability Pool',
  },
  stake: {
    id: `${scope}.stake`,
    defaultMessage: 'Stake',
  },
  liquidation: {
    id: `${scope}.liquidation`,
    defaultMessage: 'Liquidation',
  },
  toApp: {
    id: `${scope}.toApp`,
    defaultMessage: 'To the App',
  },
});
