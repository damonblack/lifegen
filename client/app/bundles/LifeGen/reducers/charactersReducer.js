/* eslint new-cap: 0 */

import Immutable from 'immutable';

export const $$initialState = Immutable.fromJS({
  $$characters: [],
});

export default function charactersReducer($$state = $$initialState, action = null) {
  const { type, comment, comments, error } = action;

  switch (type) {

    //case actionTypes.FETCH_COMMENTS_SUCCESS: {
    //  return $$state.merge({
    //    $$comments: comments,
    //    fetchCommentError: null,
    //    isFetching: false,
    //  });
    //}

    default: {
      return $$state;
    }
  }
}
