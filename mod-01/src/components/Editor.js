import React, { Component } from "react";

class Editor extends Component {
  state = {
    firstName: "Maurice"
  };

  changeFirstName = e =>
    this.setState({
      firstName: e.target.value
    });

  render() {
    const { firstName } = this.state;

    return (
      <div>
        <input value={firstName} onChange={this.changeFirstName} />
      </div>
    );
  }
}

export default Editor;
