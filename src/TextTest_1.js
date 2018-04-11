import React, { Component } from 'react';

const Test = ({ value }) => `hello ${value}`;

class MyApp extends Component {
  render() {
    return (
      <div>
        <Test value="text" />
      </div>
    );
  }
}

export default MyApp;
