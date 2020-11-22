import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Home = ({ match, location, history }) => {
  console.log('match', match);
  console.log('location', location);
  console.log('history', history);

  console.log('name', match.params.name);

  return (
    <>
      <Header greeting={`Welcome Home, ${match.params.name}`} />
      <Footer />
    </>
  );
};

Home.propTypes = {};

export default Home;
