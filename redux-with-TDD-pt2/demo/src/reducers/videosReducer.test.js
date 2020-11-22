import { addVideo } from '../actions/videosActions';
import reducer from './videosReducer';

describe('video reducer', () => {
  it('handles the ADD_VIDEO action', () => {
    const state = [];
    const action = addVideo('rks2_ctHuDQ');

    const newState = reducer(state, action);

    expect(newState).toEqual(['rks2_ctHuDQ']);
  });
});
