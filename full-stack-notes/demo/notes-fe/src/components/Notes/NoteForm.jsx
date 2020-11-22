import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../../actions/notesActions';

const NoteForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    // create a note
    // dispatch an action 
    dispatch(createNote({ title, body }));

    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={title} onChange={({ target }) => setTitle(target.value)} />
      <textarea name="body" value={body} onChange={({ target }) => setBody(target.value)}></textarea>
      <button>Create Note</button>
    </form>
  );
};

export default NoteForm;
