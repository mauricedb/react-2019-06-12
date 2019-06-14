import React, { Component } from "react";
import CounterView from "./counterView";
import withErrorBoundary from "./withErrorBoundary";
import IncrementContext from "./incrementContext";

function Counter() {
  const [count, setCount] = React.useState(0);
  const value2 = React.useContext(IncrementContext);

  function increment() {
    setCount(count + value2.x);
  }

  return <CounterView count={count} increment={increment} />;
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
