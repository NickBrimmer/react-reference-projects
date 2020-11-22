import React from 'react';
import { shallow } from 'enzyme';
import Entry from './Entry';

describe('Entry component', () => {
  it('renders Entry', () => {
    const wrapper = shallow(<Entry year="2020" text="this app" />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
