import { ADD_NOTE, SET_NOTES } from '../actions/notesActions';

const initialState = {
  notes: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_NOTE:
      return { ...state, notes: [action.payload, ...state.notes] };
    case SET_NOTES:
      return { ...state, notes: action.payload };
    default:
      return state;
  }
}
