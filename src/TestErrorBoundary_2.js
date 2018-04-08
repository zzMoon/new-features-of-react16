import React, { Component } from 'react';

const User = ({ user }) => <p className="red">name: {user.name}</p>;

// ErrorBoundary 公共组件
/*class ErrorBoundary extends Component {
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
}*/

class MyApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { name: 'xiaoming' },
      hasError: false,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ user: null });
  }

  // componentDidCatch(err, info) {
  //   console.log('---------------');
  //   console.log(err, info);
  //   this.setState({ hasError: true });
  // }

  render() {
    // if (this.state.hasError) {
    //   return '出错了！！';
    // }
    // 如果没有出错就正常渲染
    return (
      <div>
        <User user={this.state.user} />
        <button onClick={this.handleOnClick}>点击</button>
      </div>
    );
  }
}

export default MyApp;
