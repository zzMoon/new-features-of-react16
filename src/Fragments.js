import React, { Component } from 'react';

const Arrs = () => [
  <li key="3">3</li>,
  <li key="4">4</li>,
];

class App extends Component {
  render() {
    return [
      <ul>
        <li key="1">1</li>
        <li key="2">2</li>
        <Arrs />
      </ul>,
    ];
  }
}

export default App;
