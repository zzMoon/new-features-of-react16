import React, { Component } from 'react';

const Test = ({ value }) => <span>{`hello ${value}`}</span>;

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
