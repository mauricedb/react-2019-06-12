import React from "react";
import { connect } from "react-redux";

class Display extends React.Component {
  render() {
    return <div>The count is: {this.props.count}</div>;
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Display);
