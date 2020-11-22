import React from 'react';
import CountProvider from '../../providers/count/CountProvider';
import CountDisplay from '../../components/count/CountDisplay';
import CountControls from '../../components/count/CountControls';

const CountPage = () => (
  <CountProvider>
    <CountControls />
    <CountDisplay />
  </CountProvider>
);


export default CountPage;
