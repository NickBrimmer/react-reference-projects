import { useState, useEffect } from 'react';
import { getThisDay } from '../services/thisDay';

export const useThisDay = () => {
  const [births, setBirths] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getThisDay()
      .then(({ births, deaths, events }) => {
        setBirths(births);
        setDeaths(deaths);
        setEvents(events);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    births,
    deaths,
    events,
    loading
  };
};

export const useBirths = () => {
  const { births } = useThisDay();
  return births;
};
