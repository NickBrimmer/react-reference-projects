import { ADD_COMMENT } from '../actions/commentsActions';

// { text: '', videoId: '' }
export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
