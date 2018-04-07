import React, { Component } from 'react';

const User = ({ user }) => (<div>name: {user.name}</div>);

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
      return <div>出错了!</div>;
    }

    return this.props.children;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { name: 'xiaoming' },
    };
  }

  onClick() {
    this.setState({ user: null });
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
          <User user={this.state.user} />
        </ErrorBoundary>
        <button onClick={this.onClick.bind(this)}>Update</button>
      </div>
    );
  }
}

export default App;
