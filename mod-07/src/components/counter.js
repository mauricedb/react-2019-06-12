import React, { Component } from "react";

function withErrorBoundary(WrappedComponent) {
  return class extends React.Component {
    state = { error: null };

    static getDerivedStateFromError(error) {
      return { error };
    }
    componentDidCatch(error, info) {
      console.warn("Oops", error, info);
    }

    render() {
      const { error } = this.state;
      if (error) return <div>Error: {error.message}</div>;
      return <WrappedComponent {...this.props} />;
    }
  };
}

function CounterView(prop) {
  const { count, increment } = prop;

  return (
    <div>
      <div>Count: {count.toString()}</div>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.increment = this.increment.bind(this);
  // }

  state = { count: 0 };

  increment = () => {
    if (this.state.count > 5) {
      this.setState({ count: null });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
  };

  render() {
    const { count } = this.state;

    return <CounterView count={count} increment={this.increment} />;
  }
}

export default withErrorBoundary(Counter);

// function ThisIsAClass(firstName) {
//   this.firstName = firstName;
// }

// ThisIsAClass.prototype = {
//   sleep() {
//     console.log("I am sleeping" + this.firstName);
//   }
// };

// var obj = new ThisIsAClass("Maurice");
// obj.sleep();
