import { postNote, getNotesFromApi } from '../services/notesApi';
import { createAction } from 'promise-middleware-redux';

export const ADD_NOTE = 'ADD_NOTE';
export const createNote = note => dispatch => {
  // call service to create note
  postNote(note)
    .then(createdNote => {
      // dispatch ADD_NOTE action
      dispatch({
        type: ADD_NOTE,
        payload: createdNote
      });
    });
};

export const SET_NOTES = 'SET_NOTES';
export const setNotes = notes => ({
  type: SET_NOTES,
  payload: notes
});

// export const [fetchNotes, SET_NOTES, SET_NOTES_LOADING, SET_NOTES_ERROR] = createAction('SET_NOTES', getNotesFromApi);

export const fetchNotes = () => ({
  type: SET_NOTES,
  payload: getNotesFromApi()
});

// export const fetchNotes = () => dispatch => {
//   // fetch notes from api
//   return getNotesFromApi()
//     .then(notes => {
//       // dispatch an SET_NOTES action
//       dispatch(setNotes(notes));
//     });
// };
