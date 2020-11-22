import { addWord, deleteWord, updateSearchWord } from '../actions/wordsActions';
import reducer from './wordsReducer';

describe('words reducer', () => {
  it('handles the ADD_WORD action', () => {
    const state = {
      dictionary: {
        spot: 'is a dog'
      }
    };

    const action = addWord('apple', 'Is a delicious fruit');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      dictionary: {
        spot: 'is a dog',
        apple: 'Is a delicious fruit'
      }
    });
  });

  it('handle the DELETE_WORD action', () => {
    const state = {
      dictionary: {
        spot: 'is a dog',
        apple: 'Is a delicious fruit'
      }
    };

    const action = deleteWord('apple');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      dictionary: {
        spot: 'is a dog'
      }
    });
  });

  it('handles the UPDATE_SEARCH_WORD action', () => {
    const state = {
      search: '',
      dictionary: {}
    };

    const action = updateSearchWord('apple');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      search: 'apple',
      dictionary: {}
    });
  });
});
