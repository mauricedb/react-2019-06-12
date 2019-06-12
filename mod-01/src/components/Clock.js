import React, { Component, useState, useEffect } from "react";

class Clock extends Component {
  state = {
    now: new Date()
  };

  componentDidMount() {
    this.handle = setInterval(() => {
      //   this.state.now = new Date(); // Wrong
      this.setState({
        now: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  render() {
    const { now } = this.state;

    return <div>{now.toLocaleTimeString()}</div>;
  }
}

// function Clock() {
//   const [now, setNow] = useState(new Date());

//   useEffect(() => {
//     const handle = setInterval(() => {
//       setNow(new Date());
//     }, 1000);

//     return () => clearInterval(handle);
//   }, []);

//   return <div>{now.toLocaleTimeString()}</div>;
// }

export default Clock;
