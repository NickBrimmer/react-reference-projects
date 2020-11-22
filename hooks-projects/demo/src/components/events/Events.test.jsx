import React from 'react';
import { shallow } from 'enzyme';
import Events from './Events';
import Event from './Event';

describe('Events component', () => {
  it('creates an Event for each item in the events props', () => {
    const events = [
      { year: '1455', text: 'stuff happened' },
      { year: '1333', text: 'stuff happened before' },
      { year: '1556', text: 'stuff happened again' }
    ];
    const wrapper = shallow(<Events title="Births" events={events} />);

    expect(wrapper.find(Event)).toHaveLength(3);
  });

  it('has a title h2 with content set to the title prop', () => {
    const events = [
      { year: '1455', text: 'stuff happened' },
      { year: '1333', text: 'stuff happened before' },
      { year: '1556', text: 'stuff happened again' }
    ];
    const wrapper = shallow(<Events title="Births" events={events} />);

    expect(wrapper.find('h2').text()).toEqual('Births');
  });
});
