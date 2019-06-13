import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <div>Count: {count}</div>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
