import React, { Component } from 'react';

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
    // 模拟加载效果
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  componentWillReceiveProps() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    return (
      <div className="test-div">{`${this.props.name}容器`}</div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'first',
    };
  }

  selectContainer(e) {
    const newValue = e.target.value;
    // this.setState({ name: newValue });

    // 老版本方法
    // this.state.name !== newValue && this.setState({ name: newValue });

    // react 16 新方法
    if (this.state.name === newValue) {
      this.setState(null);
    } else {
      this.setState({ name: newValue });
    }
    // this.setState((state) => {
    //   if (state.name === newValue) {
    //     return null;
    //   }

    //   return { name: newValue };
    // });
  }

  render() {
    return (
      <div>
        <button value="first" onClick={this.selectContainer.bind(this)}>
          first
        </button>
        <button value="second" onClick={this.selectContainer.bind(this)}>
          second
        </button>
        <Container name={this.state.name} />
      </div>
    );
  }
}

export default App;
