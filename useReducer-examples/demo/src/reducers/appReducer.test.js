import reducer from './appReducer';

describe('app reducer', () => {
  it('sets a quote with the SET_QUOTE action type', () => {
    const state = {
      quote: null
    };

    const action = {
      type: 'SET_QUOTE',
      payload: {
        character: 'Bender',
        text: 'I can\'t afford to keep running people over. I\'m not famous enough to get away\nwith it.',
        image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
      }
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      quote: {
        character: 'Bender',
        text: 'I can\'t afford to keep running people over. I\'m not famous enough to get away\nwith it.',
        image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
      }
    });
  });

  it('toggles the theme from light to dark', () => {
    const state = {
      theme: 'light'
    };

    const action = {
      type: 'TOGGLE_THEME'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      theme: 'dark'
    });
  });

  it('toggles the theme from dark to light', () => {
    const state = {
      theme: 'dark'
    };

    const action = {
      type: 'TOGGLE_THEME'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      theme: 'light'
    });
  });
});
