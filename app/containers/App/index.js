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
import Trove from 'containers/Trove';
import StabilityPool from 'containers/StabilityPool';
import Stake from 'containers/Stake';
import Liquidation from 'containers/Liquidation';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/trove" component={Trove} />
        <Route exact path="/stability-pool" component={StabilityPool} />
        <Route exact path="/stake" component={Stake} />
        <Route exact path="/liquidation" component={Liquidation} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Fragment>
  );
}
