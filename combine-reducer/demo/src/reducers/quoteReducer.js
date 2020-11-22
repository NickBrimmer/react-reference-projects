import { SET_CHARACTER, SET_QUOTE } from '../actions/quoteActions';

export const initialState = {
  selected: 'Bender',
  quote: {
    text: '',
    character: '',
    image: ''
  }
};

export default function reducer(state, action) {
  switch(action.type) {
    case SET_CHARACTER:
      return { ...state, selected: action.payload };
    case SET_QUOTE:
      return { ...state, quote: action.payload };
    default:
      return state;
  }
}
