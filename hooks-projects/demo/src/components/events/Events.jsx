import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event';

const Events = ({ title, events }) => {
  const eventElements = events.map(event => (
    <li key={event.text}>
      <Event {...event} />
    </li>
  ));

  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {eventElements}
      </ul>
    </section>
  );
};

Events.propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired
};

export default Events;
