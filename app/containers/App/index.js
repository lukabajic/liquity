/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from 'containers/Index';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Fragment>
  );
}
