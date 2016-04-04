/* eslint new-cap: 0 */

import Immutable from 'immutable';
import * as actionTypes from '../constants/charactersConstants';

export const initialState = Immutable.fromJS({
  characters: [],
});

export default function charactersReducer(state = initialState, action = null) {
  const { type, characters } = action;

  switch (type) {

    case actionTypes.CREATE_CHARACTER_SUCCESS: {
      return state.merge({
        characters: characters
      });
    }

    default: {
      return state;
    }
  }
}
