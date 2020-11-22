const { addVideo, ADD_VIDEO } = require('./videoActions');

describe('video actions', () => {
  it('creates an action to add videos', () => {
    const action = addVideo('12345');

    expect(action).toEqual({
      type: ADD_VIDEO,
      payload: '12345'
    });
  });
});
