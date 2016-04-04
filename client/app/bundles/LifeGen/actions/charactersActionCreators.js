import * as actionTypes from '../constants/charactersConstants';
import requestManager from '../../../libs/requestManager';


export function createCharactersSuccess(data) {
  return {
    type: actionTypes.CREATE_CHARACTER_SUCCESS,
    characters: data.characters,
  };
}

export function createCharacter() {
  return dispatch => {
    return (
      requestManager
        .createCharacter()
        .then(res => dispatch(createCharactersSuccess(res.data)))
    );
  };
}

export function updateCharacter(characterId, data) {
  return dispatch => {
    return (
      requestManager
        .updateCharacter(characterId, data)
        .then(res => dispatch(createCharactersSuccess(res.data)))
    );
  };
}

export function deleteCharacter(characterId) {
  return dispatch => {
    return (
      requestManager
        .deleteCharacter(characterId)
        .then(res => dispatch(createCharactersSuccess(res.data)))
    );
  };
}
