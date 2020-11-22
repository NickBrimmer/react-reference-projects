import { getWords, getDefinition } from './wordsSelectors';

describe('words selecotrs', () => {
  it('gets all words in our dictionary', () => {
    const state = {
      dictionary: {
        spot: 'is a dog',
        apple: 'is a fruit'
      }
    };

    const words = getWords(state);

    expect(words).toEqual([
      'spot',
      'apple'
    ]);
  });

  it('gets a words definition', () => {
    const state = {
      search: 'apple',
      dictionary: {
        spot: 'is a dog',
        apple: 'is a fruit'
      }
    };

    const definition = getDefinition(state);

    expect(definition).toEqual('is a fruit');
  });
});
