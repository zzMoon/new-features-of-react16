import React, { Component } from 'react';

const User = ({ user }) => <p className="red">name: {user.name}</p>;

// ErrorBoundary 公共组件
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(err, info) {
    console.log(err, info);
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <div>出错了！！</div>;
    }

    return this.props.children;
  }
}

class MyApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { name: 'xiaoming' },
      testUser: { name: 'test' },
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleUserClick = this.handleUserClick.bind(this);
  }

  handleOnClick() {
    this.setState({ user: null });
  }

  handleUserClick() {
    this.setState({ testUser: null });
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
          <User user={this.state.user} />
        </ErrorBoundary>
        <ErrorBoundary>
          <div onClick={this.handleUserClick} >测试组件回调函数 {this.state.testUser.name}</div>
        </ErrorBoundary>
        <button onClick={this.handleOnClick}>点击</button>
      </div>
    );
  }
}

export default MyApp;
