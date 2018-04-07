import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 第一种方式
/*class MyApp extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    return (
      <div>
        <h2>Portals（挂载方式）</h2>
        {ReactDOM.createPortal(
          <div>test</div>,
          document.getElementById('portal'),
        )}
      </div>
    );
  }
}*/

// 蒙层
class Mask extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
    // 在body里面 动态创建一个container
    document.body.appendChild(this.container);
  }

  // 当组件要被从界面上移除的时候 然后就移除掉container
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

// 第二种
class MyApp extends Component {
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

export default MyApp;
