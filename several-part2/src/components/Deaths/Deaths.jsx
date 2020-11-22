import React from 'react';
import Entry from '../Entry/Entry';
import { useDeaths } from '../../hooks/thisDay';

const Deaths = () => {
  const deaths = useDeaths();
  const deathEntries = deaths.map((death, i) => (
    <li key={i}>
      <Entry {...death} />
    </li>
  ));

  return (
    <ul>
      {deathEntries}
    </ul>
  );
};

export default Deaths;
