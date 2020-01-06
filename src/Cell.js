import React from 'react';
import {Component} from 'react';


export default class Cell extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: props.value
        }
    }

    render() {
        return <div className = "cell" style = {{backgroundColor: this.state.color}} onClick = {this.changeColor}></div>
    }

    changeColor = () => {
        this.setState({
            color: "#333"
        })
    }
}