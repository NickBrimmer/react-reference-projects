import React from 'react';
import { shallow } from 'enzyme';
import CharacterWithStats from './CharacterWithStats';

describe('CharacterWithStats component', () => {
  it('renders CharacterWithStats', () => {
    const character = {
      image: 'http://image.png',
      health: 100,
      attack: 5,
      experience: 0
    };
    const wrapper = shallow(<CharacterWithStats character={character} />);
    expect(wrapper).toMatchSnapshot();
  });
});
