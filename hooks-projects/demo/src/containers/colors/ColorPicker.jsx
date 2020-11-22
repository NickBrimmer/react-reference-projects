import React, { Component } from 'react';
import ColorControls from '../../components/colors/ColorControls';
import ColorDisplay from '../../components/colors/ColorDisplay';

export default class ColorPicker extends Component {
  state = {
    text: '',
    backgroundColor: '#FFFFFF',
    textColor: '#000000'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { text, backgroundColor, textColor } = this.state;
    return (
      <>
        <ColorControls
          text={text}
          backgroundColor={backgroundColor}
          textColor={textColor}
          onChange={this.handleChange}
        />
        <ColorDisplay
          text={text}
          backgroundColor={backgroundColor}
          textColor={textColor}
        />
      </>
    );
  }
}
