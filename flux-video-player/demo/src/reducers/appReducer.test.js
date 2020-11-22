const { addVideo } = require('../actions/videoActions');
const { default: reducer } = require('./appReducer');

describe('app reducer', () => {
  it('handles the ADD_VIDEO action', () => {
    const state = {
      videoIds: []
    };
    const action = addVideo('12345');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      videoIds: ['12345']
    });
  });
});
