import { getNotes } from './notesSelectors';

describe('notes selectors', () => {
  it('gets all notes from state', () => {
    const state = {
      notes: {
        notes: [{
          title: 'My Note',
          body: 'Is good!'
        }]
      }
    };

    const notes = getNotes(state);

    expect(notes).toEqual([{
      title: 'My Note',
      body: 'Is good!'
    }]);
  });
});
