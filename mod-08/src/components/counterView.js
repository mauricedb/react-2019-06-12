import React from "react";

function CounterView(prop) {
  const { count, increment } = prop;

  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

export default CounterView;
