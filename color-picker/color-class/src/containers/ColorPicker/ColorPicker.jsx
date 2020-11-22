import React, { Component } from 'react';
import Controls from '../../components/Controls/Controls';
import Display from '../../components/Display/Display';

export default class ColorPicker extends Component {
  state = {
    color: '#000000',
    backgroundColor: '#FFFFFF',
    text: 'My Very Interesting App'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { color, backgroundColor, text } = this.state;
    return (
      <>
        <Controls
          color={color}
          backgroundColor={backgroundColor}
          text={text}
          onChange={this.handleChange}
        />
        <Display
          color={color}
          backgroundColor={backgroundColor}
          text={text}
        />
      </>
    );
  }
}
