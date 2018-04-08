import React, { Component } from 'react';

class MyApp extends Component {
  render() {
    return (
      <div my-attr="test0" my-test={() => {}} className="hello" >Hello React 16</div>
    );
  }
}

export default MyApp;
