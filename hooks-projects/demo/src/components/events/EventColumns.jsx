import React from 'react';
import PropTypes from 'prop-types';
import Events from './Events';
import styles from './EventColumns.css';

const EventColumns = ({ births, deaths, events }) => (
  <section className={styles.EventColumns}>
    <Events title="Births" events={births}/>
    <Events title="Deaths" events={deaths} />
    <Events title="Events" events={events} />
  </section>
);

EventColumns.propTypes = {
  births: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  deaths: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired
};

export default EventColumns;
