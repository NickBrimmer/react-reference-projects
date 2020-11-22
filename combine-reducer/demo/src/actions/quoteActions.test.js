import { SET_CHARACTER, setCharacter, setQuote, SET_QUOTE } from './quoteActions';

describe('quotes actions', () => {
  it('creates an action to SET_CHARACTER', () => {
    const action = setCharacter('Fry');

    expect(action).toEqual({
      type: SET_CHARACTER,
      payload: 'Fry'
    });
  });

  it('creates an action to SET_QUOTE', () => {
    const action = setQuote({
      text: 'I am a quote',
      character: 'Fry',
      image: 'http://image.com/image.png'
    });

    expect(action).toEqual({
      type: SET_QUOTE,
      payload: {
        text: 'I am a quote',
        character: 'Fry',
        image: 'http://image.com/image.png'
      }
    });
  });
});
