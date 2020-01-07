import React, { Component } from "react";

export class Cell extends Component {
    state = {
      color: this.props.value
    };

  handleClick = () => {
    this.setState({
      color: "#333"
    });
  };
  render() {
    return (
      <div
        className="cell"
        onClick={this.handleClick}
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}

export default Cell;
