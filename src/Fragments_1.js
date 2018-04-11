import React, { Component } from 'react';

const Arrs = () => [
  <li key="1">1</li>,
  <li key="2">2</li>,
  <li key="3">3</li>,
  <li key="4">4</li>,
];

class MyApp extends Component {
  render() {
    return [
      <ul>
        <li>test1</li>
        <li>test2</li>
        <Arrs />
      </ul>,
      <div>8888</div>,
      <span>555</span>,
    ];
  }
}

export default MyApp;
