import React, { Component } from 'react';
import Button from '../Button/Button'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            value: 2,
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleSave = this.handleSave.bind(this);
        
    }

    handleAdd() {
        let { max  } = this.props;
        let { value } = this.state;
        let sum = value + 1;
        this.setState({
            value: sum >= max ? max : sum
        }); 
    }

    handleMinus() {
        let { min } = this.props;
        let { value } = this.state;
        let sum = value - 1;
        this.setState({
            value: sum <= min ? min : sum
        });
    
    }

    handleSave(e) {
        
        let { value } = this.state;
        e.preventDefault();

       this.props.handleSubmit(value);
       this.props.handleProgress();

    }


    render() {
        let { value } = this.state;
        let { children, stage } = this.props;
        return (
        <>
            { stage !== 1 ? null :
            <div className="flex-col-centre counter-container">
                
                <h1>{ children }</h1>
                <div className="counter">
                    <Button className="btn btn-small" handleClick={ this.handleMinus }>-</Button>
                    <p className="counter-value">{ value }</p>
                    <Button className="btn btn-small" handleClick={ this.handleAdd }>+</Button>
                </div>
                <Button className="btn btn-main" handleClick={ this.handleSave }>Next</Button>
            </div>
            }
        </>
        );
    }
}

export default Counter;