import React from 'react';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import createStore from '../store/lifeGenStore';
import routes from '../routes/routes';
//import { syncHistoryWithStore } from 'react-router-redux';


export default (props) => {
  const store = createStore(props);

  //// Create an enhanced history that syncs navigation events with the store
  //const history = syncHistoryWithStore(
  //  browserHistory,
  //  store
  //);

  return (
    <Provider store={store}>
      <Router history={hashHistory} children={routes}/>
    </Provider>
  );
};
