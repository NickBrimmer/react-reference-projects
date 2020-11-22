import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

const TriviaContext = createContext();

// questions = [0, 1, 2, 3, 4]
// answers = [0]
const initialState = {
  questions: [],
  answers: [],
  score: 0
};

export function reducer(state, action) {
  switch(action.type) {
    case 'SET_QUESTIONS':
      return { ...state, questions: action.payload };
    case 'ADD_ANSWER':
      return {
        ...state,
        answers: [...state.answers, action.payload],
        score: state.questions[state.answers.length].correct_answer === action.payload ? state.score + 10 : state.score
      };
    default:
      return state;
  }
}

export const TriviaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TriviaContext.Provider value={{ state, dispatch }}>
      {children}
    </TriviaContext.Provider>
  );
};

TriviaProvider.propTypes = {
  children: PropTypes.node
};

export const useGlobalState = () => {
  const { state } = useContext(TriviaContext);
  return state;
};

export const useQuestions = () => {
  const { questions } = useGlobalState();
  return questions;
};

export const useAnswers = () => {
  const { answers } = useGlobalState();
  return answers;
};

export const useScore = () => {
  const { score } = useGlobalState();
  return score;
};

export const useCurrentQuestion = () => {
  const questions = useQuestions();
  const answers = useAnswers();

  return questions[answers.length];
};

export const useDispatch = () => {
  const { dispatch } = useContext(TriviaContext);
  return dispatch;
};
