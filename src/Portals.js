import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 蒙层
class Mask extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
    document.body.appendChild(this.container);
  }

  componentWillUnmount() {
    document.body.removeChild(this.container);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="mask">
        <span className="mask-close" onClick={this.props.onClose}>x</span>
        {this.props.children}
      </div>,
      this.container
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { activeMask: false };
    this.closeMask = this.closeMask.bind(this);
    this.showMask = this.showMask.bind(this);
  }

  closeMask() {
    this.setState({ activeMask: false });
  }

  showMask() {
    this.setState({ activeMask: true });
  }

  render() {
    return (
      <div>
        <h2>Portals（挂载方式）</h2>
        {this.state.activeMask && <Mask onClose={this.closeMask}>mask</Mask>}
        <button onClick={this.showMask}>show</button>
      </div>
    );
  }
}

export default App;
