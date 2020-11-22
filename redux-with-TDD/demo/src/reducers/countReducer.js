import { INCREMENT, DECREMENT, DECREMENT_BY } from '../actions/countActions';

export default function reducer(state = 0, action) {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case DECREMENT_BY:
      return state - action.payload;
    default:
      return state;
  }
}
