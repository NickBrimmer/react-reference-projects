import React from 'react';
import { useScore } from '../../hooks/TriviaProvider';

const Results = () => {
  const score = useScore();

  return (
    <h2>{score}</h2>
  );
};

export default Results;
