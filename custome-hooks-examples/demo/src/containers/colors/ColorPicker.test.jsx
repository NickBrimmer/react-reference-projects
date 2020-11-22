import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker container', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ColorPicker />);
  });

  it('has text state', () => {
    expect(wrapper.state('text')).not.toBeUndefined();
  });

  it('has backgroundColor state', () => {
    expect(wrapper.state('backgroundColor')).not.toBeUndefined();
  });

  it('has textColor state', () => {
    expect(wrapper.state('textColor')).not.toBeUndefined();
  });

  it('has a handleChange method that updates state for text', () => {
    wrapper.instance().handleChange({
      target: {
        name: 'text',
        value: 'my cool text'
      }
    });

    expect(wrapper.state('text')).toEqual('my cool text');
  });

  it('has a handleChange method that updates state for backgroundColor', () => {
    wrapper.instance().handleChange({
      target: {
        name: 'backgroundColor',
        value: '#FF0000'
      }
    });

    expect(wrapper.state('backgroundColor')).toEqual('#FF0000');
  });

  it('has a handleChange method that updates state for textColor', () => {
    wrapper.instance().handleChange({
      target: {
        name: 'textColor',
        value: '#00FF00'
      }
    });

    expect(wrapper.state('textColor')).toEqual('#00FF00');
  });
});
