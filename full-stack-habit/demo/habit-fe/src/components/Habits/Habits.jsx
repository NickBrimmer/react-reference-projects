import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHabits } from '../actions/habitsActions';
import { getHabits } from '../selectors/habitsSelectors';
import Habit from './Habit';

const Habits = () => {
  const dispatch = useDispatch();
  // get all habits from redux
  const habits = useSelector(getHabits); // [] -> [habits from the server]

  useEffect(() => {
    // fetch all habits from the server
    dispatch(setHabits());
    // fetchHabits()
    //   .then(habits => {
    //     // store all habits in redux
    //     dispatch(setHabits(habits));
    //   });
  }, []);

  // create lis for all habits
  const habitElements = habits.map(habit => (
    <li key={habit._id}>
      <Habit {...habit}  />
    </li>
  ));

  return (
    <ul>
      {habitElements}
    </ul>
  );
};

export default Habits;
