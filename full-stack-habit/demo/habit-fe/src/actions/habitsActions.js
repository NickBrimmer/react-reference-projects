import { fetchHabits, postHabit } from '../services/habitApi';

export const ADD_HABIT = 'ADD_HABIT';
export const addHabit = habit => dispatch => {
  return postHabit(habit)
    .then(createdHabit => {
      dispatch({
        type: ADD_HABIT,
        payload: createdHabit
      });
    });
};

export const SET_HABITS = 'SET_HABITS';
export const setHabits = () => dispatch => {
  return fetchHabits()
    .then(habits => {
      dispatch({
        type: SET_HABITS,
        payload: habits
      });
    });
};
