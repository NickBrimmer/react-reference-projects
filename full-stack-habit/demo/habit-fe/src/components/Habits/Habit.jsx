import React from 'react';
import PropTypes from 'prop-types';

const Habit = ({ title, progress, goal }) => (
  <section>
    <h3>{title}</h3>
    <progress value={progress} max={goal} />
  </section>
);

Habit.propTypes = {
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired
};

export default Habit;
