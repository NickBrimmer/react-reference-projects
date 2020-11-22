import React, { useContext } from 'react';
import ThisDay from '../../components/ThisDay/ThisDay';
import { NumberProvider, NumberContext } from '../../hooks/NumberProvider';
import { ThisDayProvider } from '../../hooks/thisDay';
import { CatDogProvider } from '../../hooks/CatDogProvider';
import CatDog from '../CatDog/CatDog';
import Toggle from '../Toggle/Toggle';
import Header from '../Header/Header';

const MyFirstParentComponent = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};

const Flex = ({ children }) => {
  return (
    <section style={{ display: 'flex' }}>
      {children}
    </section>
  );
};

const MyFirstContextComponent = () => {
  const { number, setNumber } = useContext(NumberContext);

  return (
    <>
      <h1>{number}</h1>
      <MyGrandChild />
      <button onClick={() => setNumber(prevNumber => prevNumber + 1)}>Increment</button>
    </>
  );
};

const MyGrandChild = () => {
  const { number } = useContext(NumberContext);
  
  return (
    <p>My number is {number}</p>
  );
};

export default function App() {
  return (
    <CatDogProvider>
      <Header />
      <CatDog />
    </CatDogProvider>
  );
}
