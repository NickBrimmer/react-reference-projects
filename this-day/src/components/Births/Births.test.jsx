import React from 'react';
import { shallow } from 'enzyme';
import Births from './Births';

describe('Births component', () => {
  it('renders Births', () => {
    const births  = [
      { year: '2020', text: 'this app' }
    ];
    
    const wrapper = shallow(<Births births={births} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
