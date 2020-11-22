import { useState, useEffect } from 'react';
import { fetchThisDay } from '../services/thisDay';

export const useThisDay = () => {
  // const [thisDay, setThisDay] = useState({ events: [], births: [], deaths: [] });
  const [events, setEvents] = useState([]);
  const [births, setBirths] = useState([]);
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    fetchThisDay()
      .then(fetchedThisDay => {
        setEvents(fetchedThisDay.events);
        setBirths(fetchedThisDay.births);
        setDeaths(fetchedThisDay.deaths);
      });
  }, []);

  return { events, births, deaths };
};

export const useEvents = () => {
  const { events } = useThisDay();
  return events;
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   fetchThisDay()
  //     .then(thisDay => setEvents(thisDay.events));
  // }, []);

  // return events;
};

export const useBirths = () => {
  const { births } = useThisDay();
  return births;
  // const [births, setBirths] = useState([]);

  // useEffect(() => {
  //   fetchThisDay()
  //     .then(thisDay => setBirths(thisDay.births));
  // }, []);

  // return births;
};

export const useDeaths = () => {
  const { deaths } = useThisDay();
  return deaths;
  // const [deaths, setDeaths] = useState([]);

  // useEffect(() => {
  //   fetchThisDay()
  //     .then(thisDay => setDeaths(thisDay.deaths));
  // }, []);

  // return deaths;
};
