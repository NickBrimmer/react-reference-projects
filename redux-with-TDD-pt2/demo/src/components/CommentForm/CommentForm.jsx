import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../actions/commentsActions';
import { useParams } from 'react-router-dom';

const CommentForm = () => {
  const [comment, setComment] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    // add the comment to our comments state in redux (dispatch an action)
    dispatch(addComment(id, comment));

    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={comment} onChange={({ target }) => setComment(target.value)}></textarea>
      <button>Add Comment</button>
    </form>
  );
};

export default CommentForm;
