import React, { memo } from "react";
import propTypes from "prop-types";

const Greeter = ({ firstName }) => {
  console.count("Greeter render");
  return <div>Hello {firstName.toUpperCase()}</div>;
};

Greeter.propTypes = {
  firstName: propTypes.string.isRequired
};

Greeter.defaultProps = {
  firstName: "Stanger"
};

export default memo(Greeter);
