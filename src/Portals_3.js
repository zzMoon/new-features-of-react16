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

// 弹框
class Dialog extends Component {
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
      <div className="dialog">
        <span className="dialog-close" onClick={this.props.onClose}>x</span>
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

    this.state = { activeDialog: false };
    this.closeDialog = this.closeDialog.bind(this);
    this.showDialog = this.showDialog.bind(this);
  }

  closeDialog() {
    this.setState({ activeDialog: false });
  }

  showDialog() {
    this.setState({ activeDialog: true });
  }

  render() {
    return (
      <div>
        <h2>Portals（挂载方式）</h2>
        {this.state.activeDialog && <Dialog onClose={this.closeDialog}>dialog</Dialog>}
        <button onClick={this.showDialog}>show</button>
      </div>
    );
  }
}

export default MyApp;
