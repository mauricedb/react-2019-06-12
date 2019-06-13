import React, { useState } from "react";
import { connect } from "react-redux";
import createIncrement from "../store/incrementAction";

function Counter(props) {
  return (
    <div>
      <div>Count: {props.count}</div>

      <button onClick={() => props.increment()}>Increment</button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    increment: function() {
      dispatch(createIncrement(1));
    }
  };
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
