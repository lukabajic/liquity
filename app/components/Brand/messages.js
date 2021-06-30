/*
 * Brand Messages
 *
 * This contains all the text for the Brand component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Brand';

export default defineMessages({
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Liquity Land',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'The most simple front-end',
  },
});
