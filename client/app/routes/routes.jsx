import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../layout/Layout';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute
      component={RouterCommentsContainer}
    />
    <Route
      path="react-router"
      component={TestReactRouter}
    />
    <Route
      path="react-router/redirect"
      component={TestReactRouterRedirect}
      onEnter={TestReactRouterRedirect.checkAuth}
    />
  </Route>
);
