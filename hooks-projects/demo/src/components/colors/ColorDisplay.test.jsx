import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('ColorDisplay component', () => {
  it('renders ColorDisplay', () => {
    const wrapper = shallow(<ColorDisplay
      text="test"
      backgroundColor="lightskyblue"
      textColor="red"
    />);
    
    expect(wrapper).toMatchSnapshot();
  });
});
