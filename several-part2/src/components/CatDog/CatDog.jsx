import React from 'react';
import Cat from '../Cat/Cat';
import Dog from '../Dog/Dog';
import { useCatDog, useImages } from '../../hooks/CatDogProvider';
import ImageGallery from '../ImageGallery/ImageGallery';

const CatDog = () => {
  const images = useImages();

  return (
    <ImageGallery images={images} />
  );
};

export default CatDog;
