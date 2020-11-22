import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNotes } from '../../selectors/notesSelectors';
import { fetchNotes } from '../../actions/notesActions';

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector(getNotes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  const noteElements = notes.map(note => (
    <li key={note._id}>
      <p>{note.title} - {note.body.slice(0, 10)}{note.body.length > 10 && '...'}</p>
    </li>
  ));

  return (
    <ul>
      {noteElements}
    </ul>
  );
};

export default Notes;
