import { getSelectedCharacter, getQuote } from './quoteSelectors';

describe('quote selectors', () => {
  it('selects the selected character name', () => {
    const state = {
      selected: 'Fry',
      quote: {}
    };

    const selectedCharacter = getSelectedCharacter(state);
    
    expect(selectedCharacter).toEqual('Fry');
  });

  it('selects the quote from state', () => {
    const state = {
      selected: '',
      quote: {
        text: 'i am a quote',
        character: 'Fry',
        image: 'http://image.com/image.png'
      }
    };

    const quote = getQuote(state);


    expect(quote).toEqual({
      text: 'i am a quote',
      character: 'Fry',
      image: 'http://image.com/image.png'
    });
  });
});
