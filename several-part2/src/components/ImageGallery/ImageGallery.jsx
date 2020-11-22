import React from 'react';
import PropTypes from 'prop-types';
import stylesDark from './ImageGalleryDark.css';
import stylesLight from './ImageGalleryLight.css';
import { useCatDog } from '../../hooks/CatDogProvider';

const themeFactory = {
  light: stylesLight,
  dark: stylesDark
};

const ImageGallery = ({ images }) => {
  const catDog = useCatDog();

  // const theme = useTheme()
  // this is cool too
  // const styles = useThemeStyles({ light: stylesLight, dark: StylesDark});
  const imageElements = images.map((image, i) => (
    <li key={i}>
      <img src={image} />
    </li>
  ));

  return (
    <ul className={themeFactory[theme].ImageGallery}>
      {imageElements}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ImageGallery;
