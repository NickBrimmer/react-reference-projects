import React from 'react';
import { shallow } from 'enzyme';
import Events from './Events';

describe('Events component', () => {
  it('renders Events', () => {
    const events = [
      { year: '2020', text: 'this app was worked on' }
    ];
    const wrapper = shallow(<Events events={events} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
