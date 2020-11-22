import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchThisDay } from '../services/thisDay';

// { Provider: Component, Consumer }
const ThisDayContext = createContext();

export const ThisDayProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [births, setBirths] = useState([]);
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    fetchThisDay()
      .then(({ events, births, deaths }) => {
        setEvents(events);
        setBirths(births);
        setDeaths(deaths);
      });
  }, []);
  
  return (
    <ThisDayContext.Provider value={{ events, births, deaths }}>
      {children}
    </ThisDayContext.Provider>
  );
};

ThisDayProvider.propTypes = {
  children: PropTypes.node
};

export const useThisDay = () => {
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
  const { events } = useContext(ThisDayContext);
  return events;
};

export const useBirths = () => {
  const { births } = useContext(ThisDayContext);
  return births;
};

export const useDeaths = () => {
  const { deaths } = useContext(ThisDayContext);
  return deaths;
};
