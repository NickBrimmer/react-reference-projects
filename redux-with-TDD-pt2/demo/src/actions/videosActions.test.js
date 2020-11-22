import { addVideo, ADD_VIDEO } from './videosActions';

describe('videos actions', () => {
  it('creates an add video action', () => {
    const action = addVideo('rks2_ctHuDQ');

    expect(action).toEqual({
      type: ADD_VIDEO,
      payload: 'rks2_ctHuDQ'
    });
  });
});
