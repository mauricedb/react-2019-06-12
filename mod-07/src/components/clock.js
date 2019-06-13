import React, { useState, useEffect } from "react";

import Greeter from "./greeter";

const Clock = ({ interval }) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const handle = setInterval(() => {
      setTime(new Date());
    }, interval);

    return () => clearInterval(handle);
  }, [interval]);

  return <div>{time.toLocaleTimeString()}</div>;
};

export default Clock;
