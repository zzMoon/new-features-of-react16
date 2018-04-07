import React, { Component } from 'react';

// const Test = ({ value }) => <span>{`hello ${value}`}</span>;
const Test = ({ value }) => `hello ${value}`;

class App extends Component {
  render() {
    return (
      <div>
        <Test value="text" />
      </div>
    );
  }
}

export default App;
