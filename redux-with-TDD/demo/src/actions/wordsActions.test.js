import { addWord, deleteWord, updateSearchWord, UPDATE_SEARCH_WORD } from './wordsActions';

describe('words actions', () => {
  it('creates an action to add word', () => {
    const action = addWord('apple', 'A very good fruit');

    expect(action).toEqual({
      type: 'ADD_WORD',
      payload: {
        word: 'apple',
        definition: 'A very good fruit'
      }
    });
  });

  it('creates an action to delete a word', () => {
    const action = deleteWord('apple');

    expect(action).toEqual({
      type: 'DELETE_WORD',
      payload: 'apple'
    });
  });

  it('create an action to update the search word', () => {
    const action = updateSearchWord('apple');

    expect(action).toEqual({
      type: UPDATE_SEARCH_WORD,
      payload: 'apple'
    });
  });
});
