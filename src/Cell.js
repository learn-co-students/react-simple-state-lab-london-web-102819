import React, { Component } from "react";

export class Cell extends Component {
  constructor(props) {
    super();
    this.state = {
      color: props.value
    };
  }

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
