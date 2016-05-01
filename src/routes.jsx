import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Newsletter from './containers/newsletter';
import App from './components/app';
import ErrorPage from './components/error_page';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Newsletter} />
    <Route path="*" component={ErrorPage} />
  </Route>
);

export default routes;
