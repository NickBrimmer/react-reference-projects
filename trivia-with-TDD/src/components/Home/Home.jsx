import React from 'react';
import PropTypes from 'prop-types';
import { fetchQuestions } from '../../services/triviaApi';
import { useDispatch } from '../../hooks/TriviaProvider';

const Home = ({ history }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // fetch questions from API (service)
    fetchQuestions()
      .then(questions => {
        // store questions in global state (Provider Context thing)
        dispatch({ type: 'SET_QUESTIONS', payload: questions });
        history.push('/question');
      });
  };

  return (
    <button onClick={handleClick}>Start</button>
  );
};

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Home;
