import { ADD_HABIT, SET_HABITS } from '../actions/habitsActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_HABIT:
      return [...state, action.payload];
    case SET_HABITS:
      return action.payload;
    default:
      return state;
  }
}
