import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useCurrentQuestion, useDispatch } from '../../hooks/TriviaProvider';

const Question = () => {
  // get the current question
  const currentQuestion = useCurrentQuestion();
  const dispatch = useDispatch();

  if(!currentQuestion) return <Redirect to="/results" />;

  // state to store radio button selection
  const [selection, setSelection] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // dispatch an action that adds our answer to global state
    dispatch({ type: 'ADD_ANSWER', payload: selection });
  };

  const radioButtons = [
    currentQuestion.correct_answer,
    ...currentQuestion.incorrect_answers
  ].sort().map((answer, i) => (
    <label key={i}>
      <input type="radio" name="answer" value={answer} onChange={({ target }) => setSelection(target.value)} />
      {answer}
    </label>
  ));

  return (
    <>
      <p dangerouslySetInnerHTML={currentQuestion.question}></p>
      <form onSubmit={handleSubmit}>
        {radioButtons}
        <button>Next</button>
      </form>
    </>
  );
};

export default Question;
