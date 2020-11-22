import { setCharacter, setQuote } from '../actions/quoteActions';
import reducer from './quoteReducer';

describe('quotes reducer', () => {
  it('handle the SET_CHARACTER action', () => {
    const state = {
      selected: '',
      quote: {
        text: '',
        character: '',
        image: ''
      }
    };

    const action = setCharacter('Fry');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      selected: 'Fry',
      quote: {
        text: '',
        character: '',
        image: ''
      }
    });
  });

  it('handles the SET_QUOTE action', () => {
    const state = {
      selected: '',
      quote: {}
    };

    const action = setQuote({
      text: 'I am a quote',
      character: 'Fry',
      image: 'http://image.com/image.png'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      selected: '',
      quote: {
        text: 'I am a quote',
        character: 'Fry',
        image: 'http://image.com/image.png'
      }
    });
  });
});
