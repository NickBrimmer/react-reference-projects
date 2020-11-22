import { fetchNotes, SET_NOTES } from './notesActions';

jest.mock('../services/notesApi.js', () => ({
  getNotesFromApi: () => Promise.resolve([])
}));

describe('notes actions', () => {
  it('fetches notes and dispatches the SET_NOTES action', () => {
    const dispatch = jest.fn();
    
    return fetchNotes()(dispatch)
      .then(() => {
        // tests here
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_NOTES,
          payload: []
        });
      });
  });
});
