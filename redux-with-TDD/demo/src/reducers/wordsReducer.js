import dictionary from '../data/dictionary.json';
import { ADD_WORD, DELETE_WORD, UPDATE_SEARCH_WORD } from '../actions/wordsActions';

const initialState = {
  search: '',
  dictionary
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_WORD:
      return {
        ...state,
        dictionary: {
          ...state.dictionary,
          [action.payload.word]: action.payload.definition
        }
      };
    case DELETE_WORD: {
      const copyDictionary = { ...state.dictionary };
      delete copyDictionary[action.payload];
      return {
        ...state,
        dictionary: copyDictionary
      };
    }
    // case DELETE_WORD:
    //   return {
    //     ...state,
    //     dictionary: Object.entries(state.dictionary)
    //       .filter(([word]) => word !== action.payload)
    //       .reduce((acc, [word, definition]) => {
    //         acc[word] = definition;
    //         return acc;
    //       }, {})
    //   };
    case UPDATE_SEARCH_WORD:
      return { ...state, search: action.payload };
    default:
      return state;
  }
}
