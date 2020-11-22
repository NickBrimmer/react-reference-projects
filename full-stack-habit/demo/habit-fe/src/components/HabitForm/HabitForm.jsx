import React, { useState } from 'react';
import { postHabit } from '../../services/habitApi';
import { useDispatch } from 'react-redux';
import { addHabit } from '../../actions/habitsActions';

const HabitForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState(1);

  const handleSubmit = event => {
    event.preventDefault();
    // send the back-end a post request to create the habit (service)
    dispatch(addHabit({ title, description, goal }));
    // postHabit({ title, description, goal })
    //   .then(habit => {
    //     // after a response:
    //     // add the habit to redux (reducer, action, ?possibly selectors?)
    //     dispatch(addHabit(habit));
    //   });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={({ target }) => setTitle(target.value)} placeholder="Habit title" />
      <textarea value={description} onChange={({ target }) => setDescription(target.value)} placeholder="Habit Description"></textarea>
      <input type="number" value={goal} onChange={({ target }) => setGoal(target.value)} placeholder="Habit Goal" />
      <button>Create Habit</button>
    </form>
  );
};


export default HabitForm;
