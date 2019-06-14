import React, { useState } from "react";
import CounterView from "./counterView";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return <CounterView count={count} increment={increment} />;
}

export default Counter;
