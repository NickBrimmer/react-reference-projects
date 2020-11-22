export const ADD_WORD = 'ADD_WORD';
export const addWord = (word, definition) => ({
  type: ADD_WORD,
  payload: {
    word,
    definition
  }
});

export const DELETE_WORD = 'DELETE_WORD';
export const deleteWord = word => ({
  type: DELETE_WORD,
  payload: word
});

export const UPDATE_SEARCH_WORD = 'UPDATE_SEARCH_WORD';
export const updateSearchWord = word => ({
  type: UPDATE_SEARCH_WORD,
  payload: word
});
