import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Roster from '../containers/Roster';
import createStore from '../store/charactersStore';

export default (props) => {
  console.log('LifeGenAppServer called');
  const store = createStore(props);

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={Roster}/>
      </Router>
    </Provider>
  );
};
