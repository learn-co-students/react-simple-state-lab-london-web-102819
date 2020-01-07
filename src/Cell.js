import React, { Component } from 'react';

class Cell extends Component{
    state = {
        color: this.props.value
    }

    clickOnCell = (e) =>{ 
        const newColor = '#333';
        this.setState({
            color: newColor
        })
    }; 

    render(){
        return(
            <div className="cell" style={{backgroundColor: this.state.color}} onClick= {this.clickOnCell}></div>
        )
    }
}

export default Cell; 