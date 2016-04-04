import rosterReducer from './rosterReducer';
import { initialState as rosterState } from './rosterReducer';

export default {
  rosterStore: rosterReducer,
};

export const initialStates = {
  rosterState,
};
