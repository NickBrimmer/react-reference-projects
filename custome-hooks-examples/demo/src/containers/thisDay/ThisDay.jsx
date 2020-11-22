import React, { useEffect } from 'react';
import { useState } from 'react';
import { getThisDay } from '../../services/thisDay';
import EventColumns from '../../components/events/EventColumns';
import { useThisDay, useBirths } from '../../hooks/thisDayHooks';

const ThisDay = () => {
  // const [births, setBirths] = useState([]);
  // const [deaths, setDeaths] = useState([]);
  // const [events, setEvents] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getThisDay()
  //     .then(({ births, deaths, events }) => {
  //       setBirths(births);
  //       setDeaths(deaths);
  //       setEvents(events);
  //     })
  //     .finally(() => setLoading(false));
  // }, []);

  const {
    births,
    deaths,
    events,
    loading
  } = useThisDay();

  if(loading) return <h1>Loading</h1>;

  return (
    <EventColumns
      births={births}
      deaths={deaths}
      events={events}
    />
  );
};

export default ThisDay;
