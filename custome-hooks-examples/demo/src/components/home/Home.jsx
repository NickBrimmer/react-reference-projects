import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import ColorPickerHooks from '../../containers/colors/ColorPickerHooks';
import ReverseColorPicker from '../../containers/colors/ReverseColorPicker';

const Home = ({ match, location, history }) => {
  console.log('match', match);
  console.log('location', location);
  console.log('history', history);

  console.log('name', match.params.name);

  return (
    <>
      <Header greeting={`Welcome Home, ${match.params.name}`} />
      <ColorPickerHooks />
      <ReverseColorPicker />
      <Footer />
    </>
  );
};

Home.propTypes = {};

export default Home;
