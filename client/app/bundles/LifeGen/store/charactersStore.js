import { createStore } from 'redux';
import reducer from '../reducers/charactersReducer';

export default props => {
  console.log('creating store with props');
  console.log(props.characters);
  return createStore(reducer, props.characters);
};
