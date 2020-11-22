import React from 'react';
import Entry from '../Entry/Entry';
import { useBirths } from '../../hooks/thisDay';

const Births = () => {
  const births = useBirths();
  const birthEntries = births.map((birth, i) => (
    <li key={i}>
      <Entry {...birth} />
    </li>
  ));

  return (
    <ul>
      {birthEntries}
    </ul>
  );
};

export default Births;
