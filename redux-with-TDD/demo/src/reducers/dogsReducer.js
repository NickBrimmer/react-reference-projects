import { ADD_DOG, UPDATE_DOG, DELETE_DOG } from '../actions/dogsActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DOG:
      return [...state, action.payload];
    case UPDATE_DOG:
      return state.map((dog, i) => {
        if(i === action.payload.index) return action.payload.dog;
        return dog;
      });
    case DELETE_DOG:
      return state.filter((_, i) => i !== action.payload);
    default:
      return state;
  }
}
