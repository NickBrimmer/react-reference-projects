import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    text: 'my first state'
  }

  handleChange = ({ target }) => {
    this.setState({ text: target.value });
  }

  render() {
    const { text } = this.state;

    return (
      <form>
        {/* uncontrolled form */}
        <input type="text" />
        {/* controlled form */}
        <input type="text" value={text} onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}
