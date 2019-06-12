import React from "react";

// class Greeter extends React.Component {
//   render() {
//     const firstName = this.props.firstName;

//     return <div>Hello {firstName}</div>;
//   }
// }

// function Greeter(props) {
//   const firstName = props.firstName;

//   return <div>Hello {firstName}</div>;
// }

const Greeter = ({ firstName, ...rest }) => {
  //   const firstName = props.firstName;
  //   const { firstName } = props;

  return <div {...rest}>Hello {firstName}</div>;
};

export default Greeter;
