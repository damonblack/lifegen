import React from 'react';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import createStore from '../store/rosterStore';
import routes from '../routes/routes';

export default (props) => {
  const store = createStore(props);

  return (
    <Provider store={store}>
      <Router history={hashHistory} children={routes}/>
    </Provider>
  );
};
