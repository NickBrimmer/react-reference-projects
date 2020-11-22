import React, { Component } from 'react';

export default class Lifecycle extends Component {
  state = {
    count: 0
  }

  componentDidMount() {
    console.log('mounted');
    this.setState({ count: 1 });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.myProp !== this.props.myProp) {
      // guard
    }

    if(prevState.myState !== this.state.myState) {
      // guard
      // fetch from api
    }
    console.log('updated');
  }

  componentWillUnmount() {
    console.log('unmount');
  }

  render() {
    const { count } = this.state;
    console.log('render', count);
    return <h1>I am Lifecyle - {count}</h1>;
  }
}
