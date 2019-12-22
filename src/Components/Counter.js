import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.min = 0

        this.handleAddStep = this.handleAddStep.bind(this);
        this.handleMinusStep = this.handleMinusStep.bind(this);
        
    }

    handleAddStep() {
        let { value } = this.state;
        this.setState({
            value: value + 1
        })
    }

    handleMinusStep() {
        let min = 0
        let { value } = this.state;
        let sum = value - 1;
        this.setState({
            value: sum <= min ? min : sum
        })
    }


    render() {
        let { value } = this.state

        return (
        <>
            <br/>
            <h4> Teams</h4>
            <p>{ value }</p>
            <button className="btn btn-primary" onClick={ this.handleAddStep }>+</button>
            <button className="btn btn-primary" onClick={ this.handleMinusStep }>-</button>
        </>
        );
    }
}

export default Counter;