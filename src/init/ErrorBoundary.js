import React, { Component } from 'react';

const User = ({ user }) => <p className="red">name: {user.name}</p>;

class MyApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { name: 'xiaoming' },
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ user: null });
  }

  render() {
    return (
      <div>
        <User user={this.state.user} />
        <button onClick={this.handleOnClick}>点击</button>
      </div>
    );
  }
}

export default MyApp;
