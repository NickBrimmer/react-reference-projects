import reducer from './notesReducer';
import { ADD_NOTE, SET_NOTES, setNotes } from '../actions/notesActions';

describe('notes reducer', () => {
  it('handles the ADD_NOTE action', () => {
    const state = {
      notes: []
    };

    const action = {
      type: ADD_NOTE,
      payload: {
        _id: '1234',
        title: 'My note',
        body: 'My notes are good',
        author: '4567'
      }
    };

    const newState = reducer(state, action);
    expect(newState).toEqual({
      notes: [{
        _id: '1234',
        title: 'My note',
        body: 'My notes are good',
        author: '4567'
      }]
    });
  });

  it('handles the SET_NOTES action', () => {
    const state = {
      notes: []
    };

    const action = setNotes([
      { title: 'hi', body: 'bye' },
      { title: 'bye', body: 'hi' },
      { title: 'you', body: 'there' },
    ]);
    
    const newState = reducer(state, action);

    expect(newState).toEqual({
      notes: [
        { title: 'hi', body: 'bye' },
        { title: 'bye', body: 'hi' },
        { title: 'you', body: 'there' },
      ]
    });
  });
});
