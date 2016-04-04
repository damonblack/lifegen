import charactersReducer from './charactersReducer';
import { initialState as characterState } from './charactersReducer';

export default {
  characterStore: charactersReducer,
};

export const initialStates = {
  characterState,
};
