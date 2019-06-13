import React, { memo } from "react";

const Greeter = ({ firstName }) => {
  console.count("Greeter render");
  return <div>Hello {firstName}</div>;
};

export default memo(Greeter);
