import React from "react";

import { Prompt } from "react-router-dom";

const Cat = props => {
  console.log(props);

  const [isDirty, setIsDirty] = React.useState(false);

  return (
    <div>
      <h2>Cute Cat {props.match.params.catName}</h2>
      <img
        src="/cat.jpg"
        alt="Cat"
        width="400"
        onClick={() => setIsDirty(true)}
      />

      {isDirty && <Prompt message="Are you sure" />}
    </div>
  );
};

export default Cat;
