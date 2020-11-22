import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCommentsByVideoId } from '../../selectors/commentsSelectors';
import Comment from './Comment';

const Comments = () => {
  const { id } = useParams();
  const comments = useSelector(state => getCommentsByVideoId(state, id));

  const commentElements = comments.map((comment, i) => (
    <li key={i}>
      <Comment text={comment.text} />
    </li>
  ));

  return (
    <ul>
      {commentElements}
    </ul>
  );
};

export default Comments;
