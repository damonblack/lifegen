import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';
import { initialStates } from '../reducers';

export default props => {
  const initialCharacters = props.characters;
  const { characterState } = initialStates;
  const initialState = {
    characterStore: characterState.merge({
      characters: initialCharacters
    })
  };

  const reducer = combineReducers({ ...reducers, });

  const finalCreateStore = compose(applyMiddleware(thunkMiddleware))(createStore);

  return finalCreateStore(reducer, initialState);
};
