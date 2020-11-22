export const ADD_REQUEST = 'ADD_REQUEST';
export const addRequest = (url, method, body) => dispatch => {
  dispatch({ type: 'LOADING' });
  makeRequest(url, method, body)
    .then(response => {
      dispatch({
        type: ADD_REQUEST,
        payload: {
          url,
          method,
          body,
          response
        }
      });
    });
};
