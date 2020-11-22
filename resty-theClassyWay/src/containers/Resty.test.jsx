import React from 'react';
import { shallow } from 'enzyme';
import Resty from './Resty';
import { requestService } from '../service/requestService';

jest.mock('../service/requestService.js', () => ({
  requestService: jest.fn(() => Promise.resolve({ name: 'spot', age: 5, weight: '20 lbs' }))
}));

describe('Resty container', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Resty />);
  });

  it('has url state', () => {
    expect(wrapper.state('url')).not.toBeUndefined();
  });

  it('has method state', () => {
    expect(wrapper.state('method')).not.toBeUndefined();
  });

  it('has body state', () => {
    expect(wrapper.state('body')).not.toBeUndefined();
  });

  it('has jsonResponse state', () => {
    expect(wrapper.state('jsonResponse')).not.toBeUndefined();
  });

  it('has a handleChange that updates the url state', () => {
    ['url', 'method', 'body', 'jsonResponse'].forEach(name => {
      wrapper.instance().handleChange({
        target: {
          name,
          value: name === 'jsonResponse' ? {} : 'placeholder'
        }
      });
    });

    expect(wrapper.state()).toEqual({
      url: 'placeholder',
      method: 'placeholder',
      body: 'placeholder',
      jsonResponse: {}
    });
  });

  it('prevents default on submit', () => {
    const preventDefault = jest.fn();
    
    wrapper.instance().handleSubmit({
      preventDefault
    });

    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  it('invokes the requestService function on submit', () => {
    wrapper.setState({
      url: 'https://api.com',
    });

    wrapper.instance().handleSubmit({
      preventDefault: () => {}
    });

    expect(requestService).toHaveBeenCalled();
    expect(requestService).toHaveBeenCalledWith('https://api.com', 'GET', '');
  });

  it('invokes the requestService function on submit and updates state', () => {
    return wrapper.instance().handleSubmit({
      preventDefault: () => {}
    })
      .then(() => {
        expect(wrapper.state('jsonResponse')).toEqual({
          name: 'spot',
          age: 5,
          weight: '20 lbs'
        });
      });
  });
});
