import { ADD_REQUEST } from '../actions/action';

const initialState = {
  loading: false,
  response: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_REQUEST:
      return { ...state, response: action.payload.response, loading: false };
    default:
      return state;
  }
}
