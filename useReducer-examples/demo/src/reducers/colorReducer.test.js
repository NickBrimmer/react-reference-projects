const { default: reducer } = require('./colorReducer');

describe('color reducer', () => {
  it('handles the TEXT action type', () => {
    const state = {
      text: '',
      backgroundColor: '#FFFFFF',
      textColor: '#000000'
    };
    const action = { type: 'TEXT', payload: 'my new text' };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      text: 'my new text',
      backgroundColor: '#FFFFFF',
      textColor: '#000000'
    });
  });

  it('handles the BACKGROUND_COLOR action type', () => {
    const state = {
      text: '',
      backgroundColor: '#FFFFFF',
      textColor: '#000000'
    };

    const action = {
      type: 'BACKGROUND_COLOR',
      payload: '#FF0000'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      text: '',
      backgroundColor: '#FF0000',
      textColor: '#000000'
    });
  });

  it('handles the TEXT_COLOR action type', () => {
    const state = {
      text: '',
      backgroundColor: '#FFFFFF',
      textColor: '#000000'
    };

    const action = {
      type: 'TEXT_COLOR',
      payload: '#00FF00'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      text: '',
      backgroundColor: '#FFFFFF',
      textColor: '#00FF00'
    });
  });
});
