import { fetchQuote } from '../services/futuramaApi';

export const SET_CHARACTER = 'SET_CHARACTER';
export const setCharacter = character => ({
  type: SET_CHARACTER,
  payload: character
});
 
export const SET_QUOTE = 'SET_QUOTE';
// export const setQuote = quote => ({
//   type: SET_QUOTE,
//   payload: quote
// });

export const setQuote = selectedCharacter => dispatch => {
  fetchQuote(selectedCharacter)
    .then(quote => {
      dispatch({
        type: SET_QUOTE,
        payload: quote
      });
    });
};
