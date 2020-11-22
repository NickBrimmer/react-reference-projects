import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchCats, fetchDogs } from '../services/catDog';

const CatDogContext = createContext();

// if(catDog === 'cat') // fetch from cat api
// if(catDog === 'dog') // fetch from dog api
const factoryMethod = {
  cat: fetchCats,
  dog: fetchDogs
};

export const CatDogProvider = ({ children }) => {
  const [catDog, setCatDog] = useState('cat');
  const [images, setImages] = useState([]);

  useEffect(() => {
    factoryMethod[catDog]()
      .then(images => setImages(images));
  }, [catDog]);
  
  const toggle = ({ target }) => {
    if(target.checked) setCatDog('dog');
    if(!target.checked) setCatDog('cat');
  };

  // value needs 2 things
  // 1. it provides checked state for dog or cat
  // 2. it provides a way to change the checked state
  return (
    <CatDogContext.Provider value={{ catDog, images, toggle }}>
      {children}
    </CatDogContext.Provider>
  );
};

CatDogProvider.propTypes = {
  children: PropTypes.node
};

export const useCatDog = () => {
  const { catDog } = useContext(CatDogContext);
  return catDog;
};

export const useImages = () => {
  const { images } = useContext(CatDogContext);
  return images;
};

export const useToggle = () => {
  const { toggle } = useContext(CatDogContext);
  return toggle;
};
