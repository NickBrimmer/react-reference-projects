import { ADD_VIDEO } from '../actions/videoActions';

export const initialState = {
  videoIds: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case ADD_VIDEO:
      return { ...state, videoIds: [...state.videoIds, action.payload] };
    default:
      return state;
  }
}
