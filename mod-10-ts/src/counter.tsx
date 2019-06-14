import React, { Component } from "react";

type CounterProps = {
  quantity: number;
};

type CounterState = {
  value: number;
};

class Counter extends Component<CounterProps, CounterState> {
  state = {
    value: 0
  };

  increment = () => {
    this.setState({ value: this.state.value + this.props.quantity });
  };

  render() {
    return (
      <div>
        Count: {this.state.value}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
