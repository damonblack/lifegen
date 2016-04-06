import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';
//import { routerReducer } from 'react-router-redux';
import { initialStates } from '../reducers';

export default props => {
  const initialRoster = props.characters;
  const { rosterState } = initialStates;
  const initialState = {
    rosterStore: rosterState.merge({
      roster: initialRoster
    })
  };

  const reducer = combineReducers({ ...reducers });
  //, routing: routerReducer });

  const finalCreateStore = compose(applyMiddleware(thunkMiddleware))(createStore);

  return finalCreateStore(reducer, initialState);
};
