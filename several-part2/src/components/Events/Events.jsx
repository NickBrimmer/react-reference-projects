import React from 'react';
import Entry from '../Entry/Entry';
import { useEvents } from '../../hooks/thisDay';

const Events = () => {
  const events = useEvents();
  const eventEntries = events.map((event, i) => (
    <li key={i}>
      <Entry {...event} />
    </li>
  ));

  return (
    <ul>
      {eventEntries}
    </ul>
  );
};

export default Events;
