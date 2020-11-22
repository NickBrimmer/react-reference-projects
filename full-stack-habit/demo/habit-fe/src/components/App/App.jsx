import React from 'react';
import Home from '../Home/Home';
import { useSelector } from 'react-redux';
import { getHabits } from '../../selectors/habitsSelectors';

export default function App() {
  const habits = useSelector(getHabits);
  
  return (
    <>
      <h1>Your latest habit - {habits[habits.length - 1]?.title}</h1>
      <Home />
    </>
  );
}
  
