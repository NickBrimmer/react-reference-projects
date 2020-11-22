export const getDictionary = state => Object.entries(state.dictionary).reduce((acc, [word, definition]) => {
  acc.push({ word, definition });
  return acc;
}, []);
export const getWords = state => Object.keys(state.dictionary);
export const getDefinition = state => state.dictionary[state.search];
