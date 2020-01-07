import React, { Component } from "react";

class Cell extends React.Component {
  state = {
    color: this.props.value
  };

  updateColor = () => {
    this.setState({
      color: "#333"
    });
  };

  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.updateColor}
      ></div>
    );
  }
}

export default Cell;
