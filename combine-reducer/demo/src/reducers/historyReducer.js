import { ADD_REQUEST } from '../actions/action';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_REQUEST:
      return [{ url: action.payload.url, method: action.payload.method }, ...state];
    default:
      return state;
  }
}
