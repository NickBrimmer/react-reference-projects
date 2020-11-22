import React from 'react';
import { shallow } from 'enzyme';
import Event from './Event';

describe('Event component', () => {
  it('renders Event', () => {
    const wrapper = shallow(<Event year="1455" text="Stuff happened" />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
